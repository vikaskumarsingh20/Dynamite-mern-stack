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
        const fileExtension = path.extname(file.name).toLowerCase();
        if (fileExtension !== '.jpg' && fileExtension !== '.png' && fileExtension !== '.jpeg') {
            return res.status(400).json({
                success: false,
                message: "Only .jpg, .png and .jpeg file formats are allowed",
                error: "Invalid file format"
            });
        }
        const filePath = path.join(__dirname, '../files', Date.now() + '-' + file.name);
        file.mv(filePath, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Failed to upload file",
                    error: err.message
                });
            }
            const newFile = new File({
                name: file.name,
                imageUrl: filePath,
                tags: req.body.tags,
                email: req.body.email
            });
            newFile.save((err, file) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        message: "Failed to save file in database",
                        error: err.message
                    });
                }
                res.status(200).json({
                    success: true,
                    message: "File uploaded successfully",
                    file: file
                });
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
