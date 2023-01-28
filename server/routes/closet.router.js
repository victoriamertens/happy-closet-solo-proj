const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('aws_access_key_id:', process.env.aws_access_key_id);
  console.log('aws_secret_access_key:', process.env.aws_secret_access_key);
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  console.log('SERVER_SESSION_SECRET:', process.env.SERVER_SESSION_SECRET);
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
router.get('/details/:id', rejectUnauthenticated, (req, res) => {
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
router.post('/newitem', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log('UploadImg:', req.body, 'USER:', req.user);
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
      data.category,
      data.uploadImg,
    ])
    .then(res.sendStatus(201))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//PUT route for closet item details
router.put('/details/:id', rejectUnauthenticated, (req, res) => {
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

//Closet Item Remove Function
//The get response is a count of how many times an item is in an outfit
router.get('/remove/:id', rejectUnauthenticated, (req, res) => {
  console.log('In delete get router:', req.params.id);
  //This query will return a count of how many times a single item is in the outfits log
  let outfitCheckQuery = `SELECT count(*) FROM "items_outfits" 
  JOIN "outfits" ON "items_outfits"."outfit_id" = "outfits"."id"
  WHERE "item_id" = $1 AND "user_id" = $2;`;

  pool
    .query(outfitCheckQuery, [req.params.id, req.user.id])
    .then((response) => {
      let outfitCount = response.rows[0].count;
      res.send(outfitCount);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

//The put for remove runs if the item is in at least one outfit
//It will update the item table to change the in_closet column value to false
router.put('/remove/:id', rejectUnauthenticated, (req, res) => {
  console.log('In delete put router:', req.params.id);
  //This query will return a count of how many times a single item is in the outfits log
  let changeClosetQuery = `UPDATE "items"
        SET "in_closet" = FALSE
        WHERE "user_id" = $1 AND "id" = $2;`;
  pool
    .query(changeClosetQuery, [req.user.id, req.params.id])
    .then(res.sendStatus(200))
    .catch((err) => {
      console.log(err);
      sendStatus(500);
    });
});

//The remove delete will delete the item if the count is zero
router.delete('/remove/:id', rejectUnauthenticated, (req, res) => {
  console.log('In delete delete router:', req.params.id);
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
});

module.exports = router;
