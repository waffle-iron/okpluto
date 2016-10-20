('use strict');

var express = require('express');
var app = express();

// setting port 
var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('server running! :)');
})

// serving static files
app.use(express.static(__dirname + '/public'));