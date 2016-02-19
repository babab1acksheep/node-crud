
/*
 * GET home page.
 */
//Use index.ejs and set title variable to Express. Its a JS variable used in index.ejs

var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
  res.render('index', { title: 'Employee Management Application', name:'babablacksheep'});
});


module.exports = router;

