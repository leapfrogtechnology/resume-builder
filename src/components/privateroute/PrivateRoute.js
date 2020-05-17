import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { getUser } from '~/storage/LocalStorage';
import routeConstants from '~/constant/routeConstants';

/**
 * Check Is User Logged And Only render Component else Redirect To Login.
 *
 * @param {*} { Component: Component, ...rest }.
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isAuthenticated = getUser() ? true : false;

      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routeConstants.LOGIN,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default PrivateRoute;
