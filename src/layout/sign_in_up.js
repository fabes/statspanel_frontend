import React, { Component } from 'react';
import '../assets/styles/global.css';

class SignInUpLayout extends Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default SignInUpLayout;
