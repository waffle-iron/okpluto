"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'
var $ = require('jquery');
var Home = require('./components/home.jsx');
var Signin = require('./components/signin.jsx');
var Signup = require('./components/signup.jsx');

ReactDOM.render(
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/signin" component={Signin}></Route>
  </Router>, $('#app')[0]
);
