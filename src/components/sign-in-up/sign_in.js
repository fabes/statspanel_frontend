import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SignInUpLayout from '../../layout/sign_in_up';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"

import { sign_in } from '../../actions/auth';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.handle_input_update = this.handle_input_update.bind(this);
  }

  handle_input_update = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  perform_user_sign_in = (e) => {
    e.preventDefault();
    const post_data = { ...this.state };
    this.props.actions.sign_in(post_data)
    console.log('sign in clicked and with props', this.props);
    return true;
  }
  
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
                    onChange={this.handle_input_update}
                  />
                </Col>
                <Col xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    hintText="Your Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                    onChange={this.handle_input_update}
                  />
                </Col>
                <Col xs={12}>
                  <RaisedButton
                    className="v-spacer"
                    fullWidth={true}
                    label="Sign In"
                    primary={true}
                    onClick={this.perform_user_sign_in}
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        sign_in,
      },
      dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignIn)