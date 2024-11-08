var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var path = require('path');
var app = express();

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, "views", "form.html"));
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

app.listen(3000, function(){
    console.log(`Server is running at http://localhost:3000`)
});