const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../.env' });

exports.error = (err, req, res, next) => {
    next(err);
    let transporter = nodemailer.createTransport({
        service: process.env.MAIL,
        auth: {
            user: process.env.FROMLOGIN,
            pass: process.env.FROMPASSWORD
        }
    });
    let mailOptions = {
        from: process.env.FROMPASSWORD,
        to: 'bearlikecode@gmail.com',
        subject: 'subject',
        html: `<div><h1>You have an error in your app</h1><p>It\'s awful</p> </div>`//////////////////////////////////////
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
};

