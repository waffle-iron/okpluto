"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Home = require('./components/home.jsx');

var App = () => (
  <div>Hello World</div>
)


ReactDOM.render(<Home />, $('#app')[0]);
