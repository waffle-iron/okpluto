"use strict";

var React = require('react');

class Signin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);

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

  render() {
    return (
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
          <button value="submit">Submit</button>
      </div>

    )
  }
}

module.exports = Signin;
