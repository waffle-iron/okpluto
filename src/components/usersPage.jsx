"use strict";

var React = require('react');
var UserList = require('./userList.jsx');
var User = require('./user.jsx');
class UsersPage extends React.Component {

  constructor(props) {
    super()
    this.state = {
      usersData: [
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
        {
          picLink:'https://upload.wikimedia.org/wikipedia/commons/d/db/English_Bulldog_about_to_sleep.jpg',
          dogname:'Coco',
          loc:'San Francisco, CA',
          dogBreed:'English Bulldog',
          dogAge: 7,
        },
      ]
    }
  }

  // componentDidMount() {
  //   var self = this;
  //   $.ajax({
  //     method: 'GET',
  //     url:'', //<<<-- TBD
  //     success: function (data) {
  //       console.log(success);
  //       self.setState({
  //         usersData: data
  //       })
  //     },
  //     error: function (err) {
  //       console.error('error: ' + error);
  //     }
  //   })
  // }

  render () {
    return (
      <div>
        <UserList users={this.state.usersData} />
      </div>
    )
  }

}

module.exports = UsersPage;
