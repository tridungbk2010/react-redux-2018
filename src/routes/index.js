import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Router, Redirect } from '@reach/router';
import {
  Dashboard,
  Home,
  LoginForm,
  SignInPage,
  SignUpPage,
  AdminPage,
} from './routes';
import { Spinner } from 'styles/common-styles';
import { SIGN_IN, SIGN_UP } from '../constants/routes';

const PrivateRoute = ({
  component: Component,
  rest,
  isAuthenticated,
  ...props
}) => {
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
        <AdminPage path="/admin" />
        <SignInPage path={SIGN_IN} />
        <SignUpPage path={SIGN_UP} />
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
