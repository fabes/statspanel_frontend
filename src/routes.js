import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';

import SignIn from './components/sign-in-up/sign_in';
import SignUp from './components/sign-in-up/sign_up';

export default () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
		</Router>
	);
}