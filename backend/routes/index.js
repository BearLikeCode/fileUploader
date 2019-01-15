var express = require('express');
var router = express.Router();

var SiteController = require('../controllers/SiteController');

router.post('/upload', SiteController.upload);

module.exports = router;
