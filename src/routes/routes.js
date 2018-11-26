import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const LoginForm = lazy(() => import('../pages/Login'));

class Routes extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <Router>
            <Home path="/" />
            <Dashboard path="dashboard" />
            <LoginForm path="login" />
          </Router>
        </Suspense>
      </ThemeProvider>
    );
  }
}

export default Routes;
