import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, hashHistory} from 'react-router';
import Thunk from 'redux-thunk'
import reducers from "./reducers";
import route from './route';
const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)
const APP = document.querySelector('.container');
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={route}/>
  </Provider>,
  APP);
