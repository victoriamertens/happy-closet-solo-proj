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
          .then((res) => console.log('Entered:', res))
          .catch((err) => console.log(err));
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
