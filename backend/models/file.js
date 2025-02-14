const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});

module.exports = mongoose.model('File', fileSchema);


fileSchema.post("save" , async function(doc) {
    try {
        let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'xyz@gmail.com',
                pass: '*************'
            }
        }
    );
    let mailDetails = {
        from: 'xyz@gmail.com',
        to: this.email,
        subject: 'File Uploaded',
        text: `File Name : ${this.name} \n File URL : ${this.imageUrl}`
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    } catch (error) {
        console.log(error);
    }
}
)
