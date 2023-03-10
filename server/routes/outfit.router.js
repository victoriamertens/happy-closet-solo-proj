const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// POST route
router.post('/newoutfit', rejectUnauthenticated, (req, res) => {
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

router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('in router outfit for get:', req.user.id);
  let userId = req.user.id;
  let outfitsQueryText = `SELECT "wear_log"."outfit_id", "comment", "reaction", "item_id", "image_url" 
  FROM "wear_log" 
  JOIN "outfits" ON "outfits"."id" = "wear_log"."outfit_id"
  JOIN "items_outfits" ON "items_outfits"."outfit_id" = "outfits"."id"
  JOIN "items" ON "items"."id" = "items_outfits"."item_id"
  WHERE "wear_log"."user_id" = $1
  ORDER BY "outfit_id" DESC;
  `;

  pool
    .query(outfitsQueryText, [userId])
    .then((response) => {
      let outfits = response.rows;
      //finalArr is being built by loop. This will be sent to outfits reducer.
      let finalArr = [];
      let urlArr = [];
      for (let i = 0; i < outfits.length; i++) {
        //these variables are set because they determine what action is taken by the loop to build finalArr
        let item = outfits[i];
        let nextItem = outfits[i + 1];
        //This conditional is run first to grab the last point in the array
        //prevents item.outfit_id from being undefined
        if (i + 1 === outfits.length) {
          urlArr.push(item.image_url);
          let object = {
            outfitId: item.outfit_id,
            outfitComment: item.comment,
            outfitReaction: item.reaction,
            urls: urlArr,
          };
          finalArr.push(object);
          //Conditional if current outfit id and next outfit id don't match
        } else if (item.outfit_id !== nextItem.outfit_id) {
          urlArr.push(item.image_url);
          let object = {
            outfitId: item.outfit_id,
            outfitComment: item.comment,
            outfitReaction: item.reaction,
            urls: urlArr,
          };
          finalArr.push(object);
          urlArr = [];
          //Conditional if the item is the last one in the log
        } else if (item.outfit_id === nextItem.outfit_id) {
          urlArr.push(item.image_url);
        } else if (i === 0) {
          urlArr.push(item.image_url);
        }
      }

      console.log('FianlARR:', finalArr);
      res.send(finalArr);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.get('/reaction/:reaction', rejectUnauthenticated, (req, res) => {
  console.log('in router outfit for get reaction:', req.params.reaction);
  let userId = req.user.id;
  let incomingReaction = req.params.reaction;
  let finalReaction = 0;
  let outfitsReactionQuery = `SELECT "wear_log"."outfit_id", "comment", "reaction", "item_id", "image_url" 
  FROM "wear_log" 
  JOIN "outfits" ON "outfits"."id" = "wear_log"."outfit_id"
  JOIN "items_outfits" ON "items_outfits"."outfit_id" = "outfits"."id"
  JOIN "items" ON "items"."id" = "items_outfits"."item_id"
  WHERE "wear_log"."user_id" = $1 AND "wear_log"."reaction" = $2 
  ORDER BY "outfit_id" DESC;
  `;
  if (incomingReaction === 'smiles') {
    finalReaction = 1;
  } else if (incomingReaction === 'okays') {
    finalReaction = 2;
  } else if (incomingReaction === 'frowns') {
    finalReaction = 3;
  }
  console.log(userId, finalReaction);
  pool
    .query(outfitsReactionQuery, [userId, finalReaction])
    .then((response) => {
      let outfits = response.rows;

      //finalArr is being built by loop. This will be sent to outfits reducer.
      let finalReactionArr = [];
      let urlReactionArr = [];
      for (let i = 0; i < outfits.length; i++) {
        //these variables are set because they determine what action is taken by the loop to build finalReactionArr
        let item = outfits[i];
        let nextItem = outfits[i + 1];
        //This conditional is run first to grab the last point in the array
        //prevents item.outfit_id from being undefined
        if (i + 1 === outfits.length) {
          urlReactionArr.push(item.image_url);
          let object = {
            outfitId: item.outfit_id,
            outfitComment: item.comment,
            outfitReaction: item.reaction,
            urls: urlReactionArr,
          };
          finalReactionArr.push(object);
          //Conditional if current outfit id and next outfit id don't match
        } else if (item.outfit_id !== nextItem.outfit_id) {
          urlReactionArr.push(item.image_url);
          let object = {
            outfitId: item.outfit_id,
            outfitComment: item.comment,
            outfitReaction: item.reaction,
            urls: urlReactionArr,
          };
          finalReactionArr.push(object);
          urlReactionArr = [];
          //Conditional if the item is the last one in the log
        } else if (item.outfit_id === nextItem.outfit_id) {
          urlReactionArr.push(item.image_url);
        } else if (i === 0) {
          urlReactionArr.push(item.image_url);
        }
      }
      console.log(finalReactionArr);
      res.send(finalReactionArr);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
