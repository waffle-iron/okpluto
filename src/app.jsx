"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router'
var $ = require('jquery');
var Home = require('./components/home.jsx');


ReactDOM.render(
  <Router>
    <Route path="/" component={Home}></Route>
  </Router>, $('#app')[0]
);
