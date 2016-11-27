var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();


router.get('/',function(req,res){
    res.send("Skills sent successfully");
});


