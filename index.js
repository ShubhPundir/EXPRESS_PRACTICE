var express = require('express');
var app = express();
var things = require('./things.js')

function fun(req, res){
    return res.send("Hello From fun");
}

// app.get('/', function(req, res){
//     res.send("Hello World");
// });

app.use('/things',things);

app.get('/fun', fun);
app.post('/fun', function(req, res){
    res.send("You just called the post method at '/fun'!\n");
});
app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
}); // USED FOR MIDDLEWAREs

app.listen(3000, function(){
    console.log("Server running on http://localhost:3000");
});