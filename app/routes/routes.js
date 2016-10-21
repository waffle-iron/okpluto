"use strict";

var User = require('../models/users');

module.exports = function(app) {

	// signup GET and POST requests for /api/users

	app.get('/signup', function(req, res) {
		res.end('our signup page will display here'); // react-route will handle this once it's running.
	});

	app.post('/signup', function(req, res) {
		console.log(req.body)
		var username = req.body.username;
		var password = req.body.password;
		res.send(200)
		// Querying through the db
			// if there is no username with a user model in our database
				// assign the new model
				// save the user to our database
					// create session here
				// else redirect the user to signup page
		})

	// signin GET anf POST requests for /api/users

	app.get('signin', function(req, res) {
		res.end('our signin page will display here');
	});

	app.post('/signin', function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		// Querying through the db

			// if the user is not in the database
				// redirect to signup
				// compare password from database
				  // if there is a match, create a session
				  // else redirect back to signup
	});

};