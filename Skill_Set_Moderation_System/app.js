var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var router = express.Router();
var port    =   process.env.PORT || 8080;
// Set up express
app = express();
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));


//require routes
var getSkills = require('./apis/getSkills');

//use routes
router.use('/', getSkills);


module.exports = router;

app.listen(port);