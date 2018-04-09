import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SignInUpLayout from '../../layout/sign_in_up';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    const customInputStyles = {
      forText: {
        color: '#6b8ab9',
        fontWeight: 'normal'
      }
    }
    return (
      <SignInUpLayout>
        <Row>
          <Col xs={12} sm={3} md={4} className="v-spacer"></Col>
          <Col xs={12} sm={6} md={4} className="v-spacer">
            <div className="login-body">
              <Row>
                <Col xs={12}>
                  <TextField
                    name="email"
                    hintText="Your Email"
                    hintStyle={customInputStyles.forText}
                    inputStyle={customInputStyles.forText}
                    fullWidth={true}
                  />
                </Col>
                <Col xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    hintText="Your Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                  />
                </Col>
                <Col xs={12}>
                  <RaisedButton
                    className="v-spacer"
                    fullWidth={true}
                    label="Sign In"
                    primary={true}
                    onClick={this.sign_in()}
                  />
                </Col>
                <Col xs={12}>
                  <Link to='/forgot-password'>
                    Forgot Your Password?
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="login-footer">
              <Link to="sign-up">
                Don't have an account? Sign Up
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={3} md={4} className="v-spacer"></Col>
        </Row>
      </SignInUpLayout>
    )
  }
}

export default SignIn;