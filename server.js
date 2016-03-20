var port = '8080' || process.env.PORT;
var host = '0.0.0.0' || process.env.HOST;
var express = require('express')
var app = express();
app.use(require('./app'));
app.listen(port, host);
console.log("Server is alive!");
