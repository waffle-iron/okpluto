"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, Link } from 'react-router';
import AuthService from './utils/AuthService';
import $ from 'jquery';
import Home from './components/home.jsx';
import Signin from './components/signin.jsx';
import Signup from './components/signup.jsx';

const auth = new AuthService('RdbZPMWBq889RuecM7WKv5q8oli0qwN2', 'katgurdak.auth0.com')
console.log(auth.login)

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace ({ pathname: '/signin'})
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="/signin" component={Signin} />
    </Route>
  )
}

export default makeMainRoutes

ReactDOM.render(
  <Router>

  </Router>, $('#app')[0]
);

//<Route path="/" component={Home}></Route>
    // <Route path="/signup" component={Signup}></Route>
    // <Route path="/signin" component={Signin}></Route>