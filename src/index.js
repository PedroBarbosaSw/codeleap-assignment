import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';

import reducers from './reducers';

const store =  applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);