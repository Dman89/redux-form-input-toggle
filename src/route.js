import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Application';
import Welcome from './Welcome';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
  </Route>
);
