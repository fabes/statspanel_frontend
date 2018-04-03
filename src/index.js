import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/sign-in-up/sign_in';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn />, document.getElementById('root'));
registerServiceWorker();
