import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.span`
  display: block;
  color: ${props => props.theme.warn.alt};
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  height: 40px;
  width: 100%;
  background: #f4f9fb;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px #e6e9ec;
`;
