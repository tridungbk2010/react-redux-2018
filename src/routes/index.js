import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { Router, Redirect } from '@reach/router';
import { Dashboard, Home, LoginForm } from './routes';

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

const Routes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Home path="/" />
        <PrivateRoute path="dashboard" component={Dashboard} />
        <LoginForm path="login" />
      </Router>
    </Suspense>
  );
};

export default hot(module)(Routes);
