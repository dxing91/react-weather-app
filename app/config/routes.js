import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import HomeContainer from '../containers/HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import DetailsContainer from '../containers/DetailsContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path='/forecast/:location' component={ForecastContainer} />
      <Route path='/details/:location' component={DetailsContainer} />
    </Route>
  </Router>
);

export default routes;
