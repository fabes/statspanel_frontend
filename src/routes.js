import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import SignIn from './components/sign-in-up/sign_in';
import SignUp from './components/sign-in-up/sign_up';
import ForgotPassword from './components/sign-in-up/forgot_password';
import Dashboard from './components/dashboard';


export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}