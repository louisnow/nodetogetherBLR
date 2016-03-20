var express = require('express');
var motivations = require('motivations');
var app = express();
var pickone = require('pick-one');
app.get('/test', function(request, response){
	response.send(pickone(motivations));		
});
app.get('/', function(request, response){
	response.send("Cha Ching");
});

app.get('/hello', function(request, response){
	response.send("Bing");
});

module.exports = app;
