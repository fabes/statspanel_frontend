import React, { Component } from 'react';
import '../assets/styles/global.css';

class SignInUpLayout extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

export default SignInUpLayout;
