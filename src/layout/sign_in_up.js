import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../assets/styles/global.css';

class SignInUpLayout extends Component{
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          {this.props.children}
        </div>  
      </MuiThemeProvider>
    )
  }
}

export default SignInUpLayout;
