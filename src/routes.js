import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '~/components/dashboard/Dashboard';
import GoogleLoginComponent from '~/components/login/Login';
import PageNotFound from '~/components/common/PageNotFound';
import PrivateRoute from '~/components/privateroute/PrivateRoute';

import routeConstants from '~/constant/routeConstants';

const baseHref = '/';

/**
 * Route User Request Based on Routes.
 *
 */
const Router = () => (
  <BrowserRouter basename={baseHref}>
    <Switch>
      <Route path={routeConstants.LOGIN} component={GoogleLoginComponent} />
      <PrivateRoute path={routeConstants.RESUME_BUILDER} component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
