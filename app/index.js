var express = require('express');
var app = express();
app.get('/', function(request, response){
	response.send("Cha Ching");
});

app.get('/hello', function(request, response){
	response.send("Bing");
});

module.exports = app;
