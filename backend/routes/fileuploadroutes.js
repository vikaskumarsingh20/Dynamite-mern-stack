const express = require('express');
const router = express.Router();
const { imageUploadClodinary, videoUpload,imageReducerUpload,localFileUpload } = require('../controllers/fileupload');

router.post('/imageUploadClodinary', imageUploadClodinary);
// router.post('/videoUpload', videoUpload);
// router.post('/imageReducerUpload', imageReducerUpload);
router.post('/localFileUpload', localFileUpload);

module.exports = router;
