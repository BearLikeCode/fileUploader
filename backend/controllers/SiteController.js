const File = require('../models/File')
const crypto = require('crypto');

exports.upload = (req, res, next) => {
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
    file.save();
    imageFile.mv(`${__dirname}/../public/files/${filenamemd5}`, (err) => {if (err) { console.log(err); }});
}