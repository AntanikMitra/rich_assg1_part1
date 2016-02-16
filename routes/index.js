var express = require('express');
var router = express.Router();

/* GET home/father page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Anirban Mitra" });
});
/* GET mother page. */
router.get('/mother', function(req, res, next) {
  res.render('mother', { title: "Mousumi Mitra" });
});
/* GET my page. */
router.get('/nik', function(req, res, next) {
  res.render('nik', {title: "Antanik Mitra"});
});

module.exports = router;
