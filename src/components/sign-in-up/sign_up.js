import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SignInUpLayout from '../../layout/sign_in_up';
import { Link } from 'react-router-dom';

class SignUp extends Component {
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
                    name="full_name"
                    hintText="Your Name"
                    hintStyle={customInputStyles.forText}
                    inputStyle={customInputStyles.forText}
                    fullWidth={true}
                  />
                </Col>
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
                    hintText="Enter a  Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                  />
                </Col>
                <Col xs={12}>
                  <TextField
                    type="password"
                    name="confirm_password"
                    hintText="Confirm Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                  />
                </Col>
                <Col xs={12}>
                  <RaisedButton
                    className="v-spacer"
                    fullWidth={true}
                    label="Sign Up"
                    primary={true}
                  />
                </Col>
                <Col xs={12}>
                  <Link to="sign-in">
                    Already have an account? Sign In
                  </Link>
                </Col>
              </Row>
            </div>
            <div className="login-footer"></div>
          </Col>
          <Col xs={12} sm={3} md={4} className="v-spacer"></Col>
        </Row>
      </SignInUpLayout>
    )
  }
}

export default SignUp;