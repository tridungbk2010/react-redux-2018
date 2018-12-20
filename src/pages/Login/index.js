import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Redirect } from '@reach/router';
import * as Yup from 'yup';
import { FormInput } from 'components/Input';
import Button from 'components/Button';
import { login } from 'store/actions';
import { FormWrapper, FormLayout, StyledFormControl } from './style';
import {
  getAccountInfo,
  getLoginLoading,
  getLoginError,
} from 'store/selectors';
import { Spinner } from 'styles/common-styles';

const validation = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Login = memo(({ login, accountInfo, loading, error }) => {
  if (accountInfo.token) {
    return <Redirect noThrow to="dashboard" />;
  }
  return (
    <FormLayout>
      <FormWrapper>
        <h1>Sign in</h1>
        <p>
          Please type <span className="hint">test@gmail.com/666666</span> to
          login
        </p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validation}
          onSubmit={values => {
            login(values);
          }}
          render={({ dirty }) => (
            <Form>
              <StyledFormControl>
                <Field name="email" type="email" component={FormInput} />
              </StyledFormControl>
              <StyledFormControl>
                <Field name="password" type="password" component={FormInput} />
              </StyledFormControl>
              <StyledFormControl>
                <Button disabled={!dirty} type="submit" label="Submit" />
                {loading ? <Spinner /> : null}
                {error.error ? <span>{error.message}</span> : null}
              </StyledFormControl>
            </Form>
          )}
        />
      </FormWrapper>
    </FormLayout>
  );
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
  accountInfo: PropTypes.shape({
    email: '',
    token: '',
  }).isRequired,
};
Login.defaultProps = {
  loading: false,
  error: {
    error: false,
    message: '',
  },
};
const mapState = state => ({
  accountInfo: getAccountInfo(state),
  loading: getLoginLoading(state),
  error: getLoginError(state),
});

export default connect(
  mapState,
  { login },
)(Login);
