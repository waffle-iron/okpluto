"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var App = () => (
  <div>Hello World</div>
)


ReactDOM.render(<App />, $('#app')[0]);
