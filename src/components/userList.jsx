"use strict";

var React = require('react');
//var UsersPage = require('./usersPage.jsx');
var User = require('./user.jsx')

var UserList = (props) => (
  <div className = "container">
    <div className = "row">
        {props.users.map(user =>
          <User user={user}/>
        )}
    </div>

  </div>

)

module.exports = UserList;
