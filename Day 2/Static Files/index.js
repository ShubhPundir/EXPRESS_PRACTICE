var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/i', function(req, res){
    res.render('image_show');
});

app.listen(3000, function(){
    console.log("Server running on http://localhost:3000");
});

// http://localhost:3000/image.png is working