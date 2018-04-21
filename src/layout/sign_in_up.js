import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../assets/styles/global.css';
import { has_valid_token } from '../actions/auth';
import history from '../utils/history';

class SignInUpLayout extends Component {
  componentWillMount() {
    this.props.actions.has_valid_token();

    if (this.props.valid_user_token === true) {
      history.push('/dashboard');
    }
  }  
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
		valid_user_token: state.users.valid_user_token,
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      has_valid_token,
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInUpLayout);