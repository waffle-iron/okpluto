"use strict";

var React = require('react');
var $ = require('jquery');
var Navigation = require('./nav.jsx');

class Signin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      location: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
  }

  handleChangeUsername(event) {
    console.log('should change username state')
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleChangeLocation(event) {
    this.setState({location: event.target.value});
  }

  submitUserInfo () {
    var userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(userInfo)
    $.ajax({
      type: 'POST',
      url: '/signup',
      data: JSON.stringify(userInfo),
      success: function(data) {
        console.log(data)
      },
      error: function (error) {
        console.log(error)
      }
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="jumbotron">
          <div className="row">
            <label>Username:</label>
            <input
              type="text"
              onChange={this.handleChangeUsername}
            />
            </div>
            <div className="row">
            <label>Password:</label>
            <input
              type="text"
              onChange={this.handleChangePassword}
            />
            </div>
            <div className="row">
            <label>Location:</label>
            <input
              type="text"
              onChange={this.handleChangeLocation}
            />
            </div>
            <button value="submit" onClick={this.submitUserInfo}>Submit</button>
        </div>
      </div>
    )
  }
}

module.exports = Signin;
