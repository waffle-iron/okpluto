import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import AuthService from '../utils/AuthService.jsx'

export class Container extends React.Component {

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Container;