import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import App from './App.jsx';

const reducers = combineReducers({
  global: require('./globalReducer.js'),
  chat: require('./chat/reducers.js')
});


const middleware = [
  // require('./path/to/middleware'),
  // require('./path/to/middleware')
];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStoreWithMiddleware(reducers, devTools);

store.subscribe(() => {
  console.log('state changed', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
    document.getElementById('main')
);