var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Hello World");
    req.body = "Hi";
});

app.listen(3000);