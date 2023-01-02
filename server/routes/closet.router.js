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
      console.log(response.rows);
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
    .catch((error) => res.sendStatus(500));
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

module.exports = router;
