"use strict";

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true},
  firstname: String,
  lastname: String,
  loc: String,
  picLink: String,
  dogname: String,
  dogLikes: [String],
  dogBreed: String,
  dogAge: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;

