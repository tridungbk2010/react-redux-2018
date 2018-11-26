import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, FormLayout } from './style';
import { FormInput } from '../../components/Input';
import Button from '../../components/Button';

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Login = () => {
  return (
    <FormLayout>
      <FormWrapper>
        <h1>Sign in</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
          render={({ dirty }) => (
            <Form>
              <Field name="email" type="email" component={FormInput} />
              <Field name="password" type="password" component={FormInput} />
              <Button disabled={!dirty} type="submit" label="Submit" />
            </Form>
          )}
        />
      </FormWrapper>
    </FormLayout>
  );
};

export default Login;
