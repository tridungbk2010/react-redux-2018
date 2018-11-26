import React, { Component } from 'react';
import { GlobalStyle } from './styles/reset.css';
import { Link } from '@reach/router';
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
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
