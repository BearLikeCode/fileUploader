const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const database = require('./bin/variables');
const File = require('./models/File')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public/files', express.static(__dirname + '/public/files'));

app.post('/upload', (req, res, next) => {

  let imageFile = req.files.file;
  res.json(req.body.file);
  let file = new File();

  let filename = req.files.file.name; //common with extension
  let dot = filename.indexOf(".", 0)
  let filelength = filename.length;
  let filenameor = filename.substring(0, dot); //only name
  let ext = filename.substring(dot, filelength+1);
  let filenamemd5 = crypto.createHash('md5').update(filenameor).digest("hex") + ext;
  
  file.fileoriginal = req.files.file.name;
  file.filealias = filenamemd5;
  file.save(function(err){
    if(err) {
      // res.send(err);
    }
    // res.json({message: 'File created'});
  })
  imageFile.mv(`${__dirname}/public/files/${filenamemd5}`, function(err) {
    if (err) {
      // return res.status(500).send(err);
      let smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
         auth: {
             user: 'bearlikecode@gmail.com',
             pass: 'freedom2017Ilove'
         }
       });
       let mailOptions = {
         to: 'bearlikecode@gmail.com',
         from: 'email',
         subject: 'subject',
         html: `<div><h1>Nodemailer ${res.status(500).send(err)}</h1><p>It\'s awful</p> </div>`
       };
  
       smtpTrans.sendMail(mailOptions, function(err) {
        console.log('email sent')
     
      });
    }
  });
})

// catch 404 and forward to error handler
app.use(function(req, res) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
  let smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
     auth: {
         user: 'bearlikecode@gmail.com',
         pass: 'freedom2017Ilove'
     }
   });
   let mailOptions = {
     to: 'bearlikecode@gmail.com',
     from: 'email',
     subject: 'subject',
     html: `<div><h1>Nodemailer ${req.body.url}</h1><p>It\'s awful</p> </div>`
   };

   smtpTrans.sendMail(mailOptions, function(err) {
    console.log('email sent')
 
  });
});

// error handler
app.use(function(err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // res.status(err.status || 500);
  let smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
     auth: {
         user: 'bearlikecode@gmail.com',
         pass: 'freedom2017Ilove'
     }
   });
   let mailOptions = {
     to: 'bearlikecode@gmail.com',
     from: 'email',
     subject: 'subject',
     html: `<div><h1>Nodemailer ${res.status(500).send(err)}</h1><p>It\'s awful</p> </div>`
   };

   smtpTrans.sendMail(mailOptions, function(err) {
    // console.log('email sent')
  });
});

app.listen(8000, () => {
  console.log('8000');
});

module.exports = app;
