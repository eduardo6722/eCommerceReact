import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage';
import NotFound from '../pages/notfound/notfound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='*' exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
