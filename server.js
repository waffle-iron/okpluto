'use strict';

var express = require('express');
var app = express();

// setting port
var port = process.env.PORT || 8080;


// config files
var db = require('./config/db');
var User = require('./app/models/users');

// serving static files
app.use(express.static(__dirname + '/public'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
// routes
require('./app/routes/routes')(app)


// signup GET and POST requests for /api/users

app.get('/signup', function(req, res) {
	res.end('our signup page will display here');
});

app.post('/signup', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	// Querying through the db
	new User({username : username}).fetch()
	.then(function(user) {
		if (!user) {
			var newUser = new User({
				username : username,
				password : password
			});

			// save the user to our database
			newUser.save()
			.then(function(newUser){
				// create session here
			})
		} else {
			console.log('that name is already being used');
			res.redirect('/signup');
		}
	})

	


});

app.listen(port, function() {
	console.log('server running! :)');
})


exports = module.exports = app; // expose our app