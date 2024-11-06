var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log(`Starting ${req.url}`);
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);