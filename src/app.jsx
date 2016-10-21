"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, Link } from 'react-router';
import AuthService from './utils/AuthService';
import $ from 'jquery';
import Home from './components/home.jsx';
import Signin from './components/signin.jsx';
import Signup from './components/signup.jsx';

ReactDOM.render(
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/signin" component={Signin}></Route>
  </Router>, $('#app')[0]
);
