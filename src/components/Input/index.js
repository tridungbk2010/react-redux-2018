//@flow
import React from 'react';
import { ErrorMessage } from './style';
import { Input } from '../../styles/global-styles';

export const FormInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] &&
      errors[field.name] && (
        <ErrorMessage className="error">{errors[field.name]}</ErrorMessage>
      )}
  </div>
);
