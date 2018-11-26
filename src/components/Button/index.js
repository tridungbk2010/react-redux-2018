import React from 'react';
import PropTypes from 'prop-types';
import { StyledSolidButton } from './style';

const Button = ({ onClick, label, fontSize, type, ...props }) => {
  return (
    <StyledSolidButton
      fontSize={fontSize}
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </StyledSolidButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  fontSize: PropTypes.number,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  fontSize: 14,
  type: 'button',
};

export default Button;
