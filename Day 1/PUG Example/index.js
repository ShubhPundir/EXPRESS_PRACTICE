var express = require('express');
var app = express();

function fun(req, res){
    return res.send("Hello From fun");
}

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res){
    res.render('first_view');
});

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