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

router.post('/',function(req,res){
    var skillsGuid = uuid.v4();
    var skillName = req.body.skillName;
    var createdDTTM = Date.now();
    var queryparams = [skillsGuid,skillName,createdDTTM]; 
    var queryString = 'CALL insert_skill(?,?,?)';
 
    con.query(queryString, queryparams,function(err, rows) {
        if (err){
            res.header("Content-Type:","application/json");
            res.json({"message":"Error occured in getSkills","Error":err});          
        }
        else{
            if(rows.affectedRows>0){
            var modGuid = uuid.v4();    
            var mod_state = req.body.mod_state;    
            var modqueryparams = [modGuid,skillsGuid,mod_state,createdDTTM]; 
            var modqueryString = 'CALL insert_moderation_state(?,?,?,?)';    
            con.query(modqueryString,modqueryparams,function(err, rows){
                if (err){
                    res.header("Content-Type:","application/json");
                    res.json({"message":"Error occured in getSkills","Error":err});          
                }
                else{
                    res.header("Content-Type:","application/json");
                    res.json({"message":"Skills added successfully","data":rows});        
                }         
            });
            }
        }
    });
});
return router;
// module.exports = router
}

