
var express = require('express');
var path    = require('path');


var router = express.Router();


module.exports = router;


router.get('/', function(req, res) {
  res.render('pages/home');
});


router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.post('/about', function(req, res) {
  res.send('about');
});

router.get('/s1mplicity', function(req, res) {
  res.render('pages/s1mplicity');
});

router.post('/s1mplicity', function(req, res) {
  res.send('s1mplicity');
});