import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GlobalStyle } from 'styles/reset.css';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Routes from 'routes';
import Nav from 'components/Nav';
// import { MENUS } from 'routes/top-menus';
import { getAccountInfo } from 'store/selectors';

class App extends Component {
  render() {
    const { accountInfo } = this.props;
    const isAuthenticated = !!accountInfo.token;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Nav isAuthenticated={isAuthenticated} />
            <div
              style={{
                backgroundColor: `#f5f6f7`,
                height: '100vh',
              }}
            >
              <Routes isAuthenticated={isAuthenticated} />
            </div>
          </>
        </ThemeProvider>
      </>
    );
  }
}

App.propTypes = {
  accountInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }),
};

const mapState = state => ({
  accountInfo: getAccountInfo(state),
});

export default connect(mapState)(hot(module)(App));
