'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// setting port
var port = process.env.PORT || 8080;


// config files
var db = require('./config/db');

// serving static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// routes
require('./app/routes/routes')(app)

app.listen(port, function() {
	console.log('server running! :)');
})


exports = module.exports = app; // expose our app