import React, { Component } from 'react';
import { GlobalStyle } from './styles/reset.css';
import { ThemeProvider } from 'styled-components';
import { Link } from '@reach/router';
import { theme } from './styles/theme';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <nav>
          <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>{' '}
          <Link to="login">Login</Link>
        </nav>
        <div>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
