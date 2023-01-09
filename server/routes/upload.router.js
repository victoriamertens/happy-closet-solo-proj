const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const multer = require('multer');
const fs = require('fs');
//const cors = require('cors');
const app = express();
//app.use(cors());

// Import required AWS SDK clients and commands for Node.js.
const AWS = require('aws-sdk');
const S3 = new AWS.S3();
const clientS3 = require('@aws-sdk/client-s3');
//const { s3Client } = require('./libs/s3Client.js'); // Helper function that creates an Amazon S3 service client module.
const { path } = require('path');
//const { fs } = require('fs');
require('dotenv').config();

//MULTER BELOW
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/photos');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

//AWS Configure for access keys
AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: 'us-east-2',
});

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Access key:', AWS.config.credentials.accessKeyId);
  }
});

// const region = 'us-east-2';
// const regionCred = new clientS3({ region: region });

// console.log('Region: ', AWS.config.region);

router.post('/', upload.single('file'), async (req, res) => {
  // POST route code here
  try {
    // Initialize a "Read stream" to start
    // reading data from this file
    let file = req.file;
    console.log(`uploading ${file.filename} from ${file.path}...`);
    let fileStream = fs.createReadStream(file.path);

    fileStream.on('open', () => {
      console.log(`stream is ${JSON.stringify(fileStream)}...`);

      uploadParams = {
        Bucket: 'myclosetbucket234q4623434532',
        // Add the required 'Key' parameter using the 'path' module.
        Key: 'closetimages/' + file.filename,
        // Add the required 'Body' parameter
        Body: fileStream,
        ACL: 'public-read',
        ContentType: 'image/jpeg',
      };

      S3.putObject(uploadParams, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
          console.log('Success, Here is the data', data);
          let imageUrl = `https://myclosetbucket234q4623434532.s3.us-east-2.amazonaws.com/closetimages/${file.filename}`;
          console.log('Image URL:', imageUrl);
          res.send(imageUrl);
        }
      });
    });
  } catch (err) {
    console.log('Error', err);
    res.sendStatus(500);
  }
});

//   if (req.file) {
//     res.send({ file: req.file });
//     // res.send({
//     //   status: true,
//     //   message: 'File Uploaded!',
//     // });
//   } else {
//     res.status(400).send({
//       status: false,
//       data: 'File Not Found :(',
//     });
//   }
// } catch (err) {
//   res.status(500).send(err);
// }
// });

module.exports = router;
