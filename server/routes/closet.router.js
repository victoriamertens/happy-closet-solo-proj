const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('In closet GET router:', req.user);
  let queryTextGet = `
SELECT * 
FROM "items" 
WHERE "user_id" = $1
ORDER BY "id" DESC; `;

  pool
    .query(queryTextGet, [req.user.id])
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

/**
 * GET Closet Item Details
 */
router.get('/details/:id', (req, res) => {
  // GET route code here
  console.log('In closet GET router:', req.params.id);
  let queryTextGet = `
SELECT * 
FROM "items" 
WHERE "user_id" = $1 AND "id" = $2;`;

  pool
    .query(queryTextGet, [req.user.id, req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('Catch:', error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/newitem', (req, res) => {
  // POST route code here
  console.log('BODY:', req.body, 'USER:', req.user);
  let data = req.body;
  let userId = req.user.id;
  let color = '';
  let brand = '';
  if (data.color) {
    color = data.color;
  }
  if (data.brand) {
    brand = data.brand;
  }

  let queryTextPost = `INSERT INTO "items"
  ("user_id","name", "color", "cost", "brand", "category_name", "image_url")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  pool
    .query(queryTextPost, [
      userId,
      data.name,
      color,
      data.cost,
      brand,
      'filler category',
      data.imageUrl,
    ])
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//PUT route for closet item details
router.put('/details/:id', (req, res) => {
  console.log('In closet/details PUT router:', req.params.id);
  let newInput = req.body.payload.data;
  let columnName = req.body.payload.field;
  let queryTextPut = `
  UPDATE "items"  
  SET ${columnName} = '${newInput}'
  WHERE "user_id" = $1 AND "id" = $2;`;

  pool
    .query(queryTextPut, [req.user.id, req.params.id])
    .then((response) => {
      console.log('It came back!', response);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Catch:', error);
      res.sendStatus(500);
    });
});

//Closet Item DELETE/UPDATE route
//What determines which process occurs is if the item has been used in an outfit or not
router.delete('/delete/:id', (req, res) => {
  console.log('In delete router:', req.params.id);
  //This query will return a count of how many times a single item is in the outfits log
  let outfitCheckQuery = `SELECT count(*) FROM "items_outfits" 
  JOIN "outfits" ON "items_outfits"."outfit_id" = "outfits"."id"
  WHERE "item_id" = $1 AND "user_id" = $2;`;

  pool
    .query(outfitCheckQuery, [req.params.id, req.user.id])
    .then((response) => {
      let outfitCount = response.rows[0].count;
      //IF the count is 0, then a delete will occur
      if (outfitCount === 0) {
        let queryTextDelete = `
         DELETE
        FROM "items"
        WHERE "user_id" = $1 AND "id" = $2; `;

        pool
          .query(queryTextDelete, [req.user.id, req.params.id])
          .then((response) => {
            console.log('It came back!', response);
            res.sendStatus(200);
          })
          .catch((error) => {
            console.log('Catch:', error);
            res.sendStatus(500);
          });
        //IF the count is not zero, then the query will update the data column 'in_closet' to false
      } else {
        let changeClosetQuery = `UPDATE "items"  
        SET "in_closet" = FALSE
        WHERE "user_id" = $1 AND "id" = $2;`;
        pool
          .query(changeClosetQuery, [req.user.id, req.params.id])
          .then()
          .catch((err) => {
            console.log(err);
            sendStatus(500);
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });

  //
});

module.exports = router;
