const cloudinary = require('cloudinary').v2;
const File = require('../models/file');
const path = require('path');
const fs = require('fs');

exports.uploadFile = async (req, res) => {
    try {
        const file = req.file;
        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (fileExtension !== '.jpg' && fileExtension !== '.png' && fileExtension !== '.jpeg') {
            return res.status(400).json({
                success: false,
                message: "Only .jpg, .png and .jpeg file formats are allowed",
                error: "Invalid file format"
            });
        }
        const imageBuffer = file.buffer;
        const imageUploadResult = await cloudinary.uploader.upload(imageBuffer, {
            folder: 'files',
        });
        const newFile = new File({
            name: file.originalname,
            imageUrl: imageUploadResult.secure_url,
            tags: req.body.tags,
            email: req.body.email
        });
        await newFile.save();
        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            file: newFile
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to upload file",
            error: error.message
        });
    }
}


exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log(file);
        const fileExtension = path.extname(file.name).toLowerCase();
        if (fileExtension !== '.jpg' && fileExtension !== '.png' && fileExtension !== '.jpeg') {
            return res.status(400).json({
                success: false,
                message: "Only .jpg, .png and .jpeg file formats are allowed",
                error: "Invalid file format"
            });
        }
        const filePath = path.join(__dirname, 'files', `${file.name}`);
        console.log(filePath);
        file.mv(filePath, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Failed to upload file",
                    error: err.message
                });
            }
            return res.status(200).json({
                success: true,
                message: "uploaded successfully"
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to upload file",
            error: error.message
        });
    }
}

exports.imageUploadClodinary = async (req, res) => {
    try {
        const file = req.file;
        console.log(file);
        if (!file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (fileExtension !== '.jpg' && fileExtension !== '.png' && fileExtension !== '.jpeg') {
            return res.status(400).json({
                success: false,
                message: "Only .jpg, .png and .jpeg file formats are allowed",
                error: "Invalid file format"
            });
        }

        const imageBuffer = file.buffer;
        const uploadResult = await cloudinary.uploader.upload_stream({ folder: 'files' }, (error, result) => {
            if (error) {
                throw new Error('Cloudinary upload error');
            }
            return result;
        }).end(imageBuffer);

        const newFile = new File({
            name: file.originalname,
            imageUrl: uploadResult.secure_url,
            tags: req.body.tags,
            email: req.body.email
        });
        await newFile.save();

        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            file: newFile
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to upload file",
            error: error.message
        });
    }
}
