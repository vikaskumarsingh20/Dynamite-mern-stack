const cloudinary = require('cloudinary').v2;
const File = require('../models/file');
const path = require('path');


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

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

async function uploadFileToCloudinaryHightWidth(file, folder, quality) {
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}   

exports.imageUploadClodinary = async (req, res) => {
    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading to Dynamite");
        const response = await uploadFileToCloudinary(file, "Dynamite");
        console.log(response);

        // data entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({

            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        });

    }
}

exports.imageReducerUpload = async (req, res) => {
    try{
        //data fetch
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading to Dynamite");
        const response = await uploadFileToCloudinary(file, "Dynamite",30);
        console.log(response);

        // data entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        });

        res.json({

            success:true,
            imageUrl:response.secure_url,
            message:'Image Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        });

    }

}


exports.videoUpload = async (req,res) => {
    try{
        const { name, tags, email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;
        console.log(file);

        //Validation
        const supportedTypes = ["mp4","mov","webm"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type:", fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading to Cloudinary");
        const response = await uploadFileToCloudinary(file, "Dynamite",30);
        console.log(response);

        // data entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            videoUrl:response.secure_url,
        });

        res.json({

            success:true,
            videoUrl:response.secure_url,
            message:'Video Successfully Uploaded',
        })
    }
    catch(error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        });

    }


}
