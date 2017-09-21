import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import cookie from 'react-cookie';
import AppRouter from './router';
import reducers from './reducers/index';

// import ReactGA from 'react-ga';

import { AUTH_USER } from './actions/types';
// import { FETCH_USER } from './actions/types';

// Import stylesheets
import './public/stylesheets/app.scss';

// *** Initialize Google Analytics ***
// ReactGA.initialize('UA-000000-01');

// function logPageView() {
//   ReactGA.pageview(window.location.pathname);
// }

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = cookie.load('token');

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({
    type: AUTH_USER,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root'),
);

// / add to < Router onUpdate={logPageView} /> for google analytics
