//Express and router imports
const express = require('express');
const router = express.Router();
//Importing multer for file middleware
const multer = require('multer');
//Importing fs to open stream to file system of computer
const fs = require('fs');
//using aws dev kit to handle the upload process
const AWS = require('aws-sdk');

//MULTER BELOW
let storage = multer.diskStorage({});
//using disk storage's default setting to store file in memory
let upload = multer({ storage: storage });

//AWS Configure for access keys
AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: 'us-east-2',
});
const S3 = new AWS.S3();

//Below is testing proper credentials
AWS.config.getCredentials(function (err) {
  if (err) {
    console.log(err.stack);
  } else {
    // credentials not loaded
    console.log(
      'Access key:',
      AWS.config.credentials.accessKeyId,
      'Secret Acces key:',
      AWS.config.credentials.secretAccessKey,
      'S3_Bucket:',
      process.env.S3_BUCKET
    );
  }
});

router.post('/', upload.single('file'), async (req, res) => {
  // POST route code here
  try {
    // Initialize a "Read stream" to start
    let file = req.file;
    let fileStream = fs.createReadStream(file.path);

    fileStream.on('open', () => {
      uploadParams = {
        Bucket: process.env.S3_BUCKET,
        Key: 'closetimages/' + file.filename,
        Body: fileStream,
        ACL: 'public-read',
        ContentType: 'image/jpeg',
      };

      S3.putObject(uploadParams, function (err, data) {
        if (err) console.log(err, err.stack);
        else {
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

module.exports = router;
