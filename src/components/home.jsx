"use strict";

var React = require('react');
var Navigation = require('./nav.jsx')

class Home extends React.Component {

  render () {
    return (
      <div>
        <Navigation />
        <div className="jumbotron" >
          <div className="container">
            <h1>Ok Pluto</h1>
            <h2>Online playground for your best friend</h2>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="http://img11.deviantart.net/8108/i/2015/130/e/2/human_connection_by_zinavarta-d8sv813.jpg" className="img-circle"/>
              <h2>CONNECT</h2>
            </div>
            <div className="col-lg-4">
               <img src="http://img11.deviantart.net/8108/i/2015/130/e/2/human_connection_by_zinavarta-d8sv813.jpg" className="img-circle"/>
               <h2>MEET UPS</h2>

            </div>
            <div className="col-lg-4">
               <img src="http://img11.deviantart.net/8108/i/2015/130/e/2/human_connection_by_zinavarta-d8sv813.jpg" className="img-circle"/>
               <h2>DOG SIT</h2>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

module.exports = Home;
