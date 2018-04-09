import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import SignIn from './components/sign-in-up/sign_in';
import GlobalRoutes from './routes';
import Reducers from './reducers';

const configureStore = () => {
  let store = createStore(Reducers, undefined,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

  let persistor = persistStore(store,
    null,
    () => {
      store.getState();
    }
  )
  return { persistor, store }
}

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MuiThemeProvider>
        <GlobalRoutes>
          <SignIn />
        </GlobalRoutes>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
