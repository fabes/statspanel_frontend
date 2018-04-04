import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './components/sign-in-up/sign_in';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GlobalRoutes from './routes';

ReactDOM.render(
  <MuiThemeProvider>
    <GlobalRoutes>
      <SignIn />
    </GlobalRoutes>  
  </MuiThemeProvider>,
  document.getElementById('root'));
registerServiceWorker();
