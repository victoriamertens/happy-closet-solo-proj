const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// POST route
router.post('/newoutfit', (req, res) => {
  console.log('BODY:', req.body, 'USER:', req.user);

  //First step, insert into outfits table
  let data = req.body;
  let userId = req.user.id;

  let queryTextOutfit = `INSERT INTO "outfits"
  ("user_id")
  VALUES ($1)
  RETURNING id;`;
  //Returning id is required for insert into subsequent tables

  pool
    .query(queryTextOutfit, [userId])
    .then((response) => {
      //Next, insert into the item_outfits connector table for the many to many relationship
      //response includes the id of the row just inserted into
      let outfitId = response.rows[0].id;
      let itemsOutfitsQuery = `INSERT INTO "items_outfits" ("item_id", "outfit_id") VALUES ($1, $2);`;
      //Because the data comes in as an array of objects, to enter into database we must loop over every object
      //The loop excludes the last object because that contains the comment and reaction information
      for (let i = 0; i <= data.length - 2; i++) {
        let item = data[i].id;
        pool
          .query(itemsOutfitsQuery, [item, outfitId])
          .then()
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      }
      //Next, we query the wear_log table to log the comment and reaction which is the last spot in the incoming data array
      console.log('Outfit ID:', outfitId, 'User Id:', userId);
      let wearLogQuery = `INSERT INTO "wear_log" ("user_id", "outfit_id", "comment", "reaction") VALUES ($1, $2, $3, $4);`;
      let comment = data[data.length - 1].comment;
      let reaction = data[data.length - 1].reaction;
      pool
        .query(wearLogQuery, [userId, outfitId, comment, reaction])
        .then(res.sendStatus(201))
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  console.log('in router outfit for get');
});

module.exports = router;
