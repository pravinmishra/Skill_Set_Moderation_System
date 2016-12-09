var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
// var router = express.Router();
var port    =   process.env.PORT || 8080;
// Set up express
app = express();
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.json({ 
    limit: '50mb'
}));
app.use(bodyParser.text({ 
    limit: '50mb'
}));
app.use(bodyParser.raw({ 
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
        extended: true
}));
app.use(function(req, res, next) {                                            // CORS Issue Fix
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//require routes
var getSkills = require('./apis/getSkills')(app);
var addSkills = require('./apis/addSkills')(app);

//use routes
app.use('/getSkills', getSkills);
app.use('/addSkills', addSkills);
// router.get('/getSk',function(req,res){
//     res.header("Content-Type:","application/json");
//     res.send("Skills sent successfully");
// });
// app.get('/',function(req,res){
//     res.header("Content-Type:","application/json");
//     res.send("Skills sent successfully");
// });

// module.exports = router;

// app.listen(port);
app.listen(port,function(err){
  if (err) {
      // the asynchronous or synchronous code that we want to catch thrown errors on
      // var err1 = new Error(err)
      throw err
      // logs.logErrorServer(err);
  }else{
    console.log("Skill Morderations System server is running on port : "+ port);
  } 
});
