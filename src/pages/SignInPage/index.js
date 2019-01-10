import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../components/SignInForm';
import { SignUpLink } from '../../components/SignUpForm';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <h1>SignIn</h1>
        <SignInForm />
        <SignUpLink />
      </div>
    );
  }
}

SignInPage.propTypes = {};

export default SignInPage;
