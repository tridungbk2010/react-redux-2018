import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Router, Redirect } from '@reach/router';
import { Dashboard, Home, LoginForm } from './routes';
import { Spinner } from '../styles/global-styles';

const PrivateRoute = ({
  component: Component,
  rest,
  isAuthenticated,
  ...props
}: Props) => {
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect noThrow to="/login" />
  );
};

const Routes = ({ isAuthenticated }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Home path="/" />
        <PrivateRoute
          path="dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <LoginForm path="login" />
      </Router>
    </Suspense>
  );
};

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default Routes;
