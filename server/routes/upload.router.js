const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const multer = require('multer');
const cors = require('cors');
const app = express();
app.use(cors());

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './server/photos');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

console.log('UPLOAD:', upload);

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */

router.post('/', upload.single('file'), async (req, res) => {
  // POST route code here
  try {
    if (req.file) {
      res.send({
        status: true,
        message: 'File Uploaded!',
      });
    } else {
      res.status(400).send({
        status: false,
        data: 'File Not Found :(',
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
