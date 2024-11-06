var express = require('express');
var app = express();
var things = require('./things.js');

app.use('/things', things)

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.get('/things/:id([0-9]{5})', function(req, res){
    // id will be of 5 digit long, with each literals from 0 to 9
    res.send('id: ' + req.params.id);
});

app.get('*', function(req, res){
    res.send('CANT EVEN TYPE THE RIGHT URL.');
});

app.listen(3000);