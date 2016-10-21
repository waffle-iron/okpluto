'use strict';

var React = require('react');
var Navigation = require('./nav.jsx');

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <Navigation />
            <div>
            <br></br>
            <div className="well">
              <div className="page-header">
                <label>username</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Profile;