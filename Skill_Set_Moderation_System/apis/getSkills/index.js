module.exports = function(app){
           
var express = require('express');
var bodyParser = require('body-parser');
// var mysql = require('mysql');
var router = express.Router();
var con = require('../conn');
var uuid = require('node-uuid');
//---------------------------------- Router Configuration ----------------------------------
router.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
router.use(bodyParser.json({ 
    limit: '50mb'
}));
router.use(bodyParser.text({ 
    limit: '50mb'
}));
router.use(bodyParser.raw({ 
    limit: '50mb'
}));

router.get('/',function(req,res){

    var getqueryparams = ''; 
    var queryString = 'CALL get_Skill()';
 
    con.query(queryString, function(err, rows) {
        if (err){
            res.header("Content-Type:","application/json");
            res.json({"message":"Error occured in getSkills","Error":err});          
        }
        else{
            res.header("Content-Type:","application/json");
            res.json({"message":"Skills sent successfully","data":rows});          
        }
    });
});
return router;
// module.exports = router
}

