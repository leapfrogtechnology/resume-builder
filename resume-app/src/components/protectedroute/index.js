import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import * as localStorage from "storage/LocalStorage";
import routeConstants from "constant/routeConstants";

/**
 * Check Is User Logged And Only render Component else Redirect To Login.
 *
 * @param {*} { Component: Component, ...rest }.
 */
const ProtectedRoute = ({ match, location, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={({ match, location, ...props }) => {
      const { email, isAdmin } = localStorage.getUser() || {};

      if (!email) {
        return (
          <Redirect
            to={{
              pathname: routeConstants.LOGIN,
              state: { from: props.location },
            }}
          />
        );
      }
      const isAuthenticated =
        email === match.params.email || isAdmin ? true : false;

      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routeConstants.DASHBOARD,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default ProtectedRoute;
