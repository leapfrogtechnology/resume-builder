import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "components/home";
import Login from "components/login";
import Preview from "components/resume/preview";
import EditResume from "components/resume/edit";
import PrivateRoute from "components/privateroute";
import ProtectedRoute from "components/protectedroute";
import PageNotFound from "components/common/PageNotFound";

import routeConstants from "constant/routeConstants";

const baseHref = process.env.REACT_APP_BASE_HREF || "/";

/**
 * Route User Request Based on Routes.
 *
 */
const Router = () => (
  <BrowserRouter basename={baseHref}>
    <Switch>
      <Route exact path={routeConstants.LOGIN} component={Login} />
      <Route exact path={routeConstants.PREVIEWRESUME} component={Preview} />
      <ProtectedRoute
        exact
        path={routeConstants.EDITRESUME}
        component={EditResume}
      />
      <PrivateRoute exact path={routeConstants.DASHBOARD} component={Home} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
