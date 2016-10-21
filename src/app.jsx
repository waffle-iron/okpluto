"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, Link } from 'react-router';
import AuthService from './utils/AuthService';
import $ from 'jquery';
import Home from './components/home.jsx';


const auth = new AuthService('RdbZPMWBq889RuecM7WKv5q8oli0qwN2', 'katgurdak.auth0.com')

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
  </Router>, $('#app')[0]
);
