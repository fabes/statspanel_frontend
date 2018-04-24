import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Row, Col } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SignInUpLayout from '../../layout/sign_in_up';
import { Link } from 'react-router-dom';
import { sign_up } from '../../actions/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }

    this.handle_input_update = this.handle_input_update.bind(this);
  }

  handle_input_update = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sign_user_up = () => {
    const user_data = this.state;
    this.props.actions.sign_up(user_data);
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
                    name="full_name"
                    hintText="Your Name"
                    hintStyle={customInputStyles.forText}
                    inputStyle={customInputStyles.forText}
                    fullWidth={true}
                    onChange={this.handle_input_update}
                  />
                </Col>
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
                    hintText="Enter a Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                    onChange={this.handle_input_update}
                  />
                </Col>
                <Col xs={12}>
                  <TextField
                    type="password"
                    name="password_confirmation"
                    hintText="Confirm Password"
                    hintStyle={customInputStyles.forText}
                    fullWidth={true}
                    onChange={this.handle_input_update}
                  />
                </Col>
                <Col xs={12}>
                  <RaisedButton
                    className="v-spacer"
                    fullWidth={true}
                    label="Sign Up"
                    secondary={true}
                    onClick={this.sign_user_up}
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


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        sign_up,
      },
      dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUp)