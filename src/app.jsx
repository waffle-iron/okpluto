"use strict";


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, Link } from 'react-router';
import AuthService from './utils/AuthService';
import $ from 'jquery';
import Home from './components/home.jsx';
import { auth0 } from '../config/auth0.js';


const auth = new AuthService(auth0.AUTH0_CLIENT_ID, auth0.AUTH0_DOMAIN);

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace ({ pathname: '/signin'})
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} onEnter={requireAuth} />
      <Route path="/signin" component={Home} />
    </Route>

