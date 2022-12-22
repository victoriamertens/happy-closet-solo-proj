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
WHERE "user_id" = $1; `;

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
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let queryText = `INSERT INTO "items"
  ("user_id","name", "color", "cost", "brand", "category_name", "image_url")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;
});

module.exports = router;
