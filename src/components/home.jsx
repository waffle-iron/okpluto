"use strict";

var React = require('react');

class Home extends React.Component {

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className='navbar-brand'>Ok Pluto</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a>Sign In</a></li>
            <li><a>Sign Up</a></li>
          </ul>
        </div>
      </nav>
    )
  }

}

module.exports = Home;
