const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/newoutfit', (req, res) => {
  // POST route code here
  console.log('BODY:', req.body, 'USER:', req.user);
  let data = req.body;
  let userId = req.user.id;

  let queryTextOutfit = `INSERT INTO "outfits"
  ("user_id")
  VALUES ($1)
  RETURNING id;`;

  pool
    .query(queryTextOutfit, [userId])
    .then((response) => {
      console.log('OutfitID:', response.rows[0].id);
      let outfitId = response.rows[0].id;
      let itemsOutfitsQuery = `INSERT INTO "items_outfits" ("item_id", "outfit_id") VALUES ($1, $2);`;
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
      console.log('Outfit ID:', outfitId, 'User Id:', userId);
      let wearLogQuery = `INSERT INTO "wear_log" ("user_id", "outfit_id", "comment", "reaction") VALUES ($1, $2, $3, $4);`;
      let comment = data[data.length - 1].comment;
      let reaction = data[data.length - 1].reaction;
      pool
        .query(wearLogQuery, [userId, outfitId, comment, reaction])
        .then()
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

module.exports = router;
