const express = require("express");
const router = express.Router();
const multer = require("multer");

const { imageUploadClodinary, videoUpload, imageReducerUpload, localFileUpload } = require("../controllers/fileupload");

// Multer configuration to store file in memory buffer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// router.post( "/imageUploadClodinary",upload.single("file"),imageUploadClodinary);
router.post("/imageUploadClodinary", imageUploadClodinary);
router.post("/localFileUpload", localFileUpload);

module.exports = router;
