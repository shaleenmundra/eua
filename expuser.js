var express = require('express');
var app = express(),
var useragent = require('express-useragent');

app.get('/', function(req, res){
    var source = req.headers['user-agent'];
    console.log(JSON.stringify(useragent.parse(source)));
    res.send(useragent.parse(source));
});


app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(8000);