import styled, { css } from 'styled-components';
import { Gradient, Shadow, Transition, hexa } from '../../styles/global-styles';

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 700;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props => (props.icon ? '4px 8px 4px 4px' : '12px 16px')};

  &:hover {
    transition: ${Transition.hover.on};
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.high} ${hexa(props.theme.bg.reverse, 0.15)}`};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }

  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;

export const StyledSolidButton = styled.button`
  ${baseButton}
  background-color: ${props =>
    props.disabled
      ? '#e0e0e0'
      : eval(`props.theme.${props.color ? props.color : `brand.alt`}`)};
  background-image: ${props =>
    props.disabled || props.gradientTheme === 'none'
      ? 'none'
      : props.gradientTheme
        ? Gradient(
            eval(`props.theme.${props.gradientTheme}.alt`),
            eval(`props.theme.${props.gradientTheme}.default`),
          )
        : Gradient(props.theme.brand.alt, props.theme.brand.default)};
  color: ${props => props.theme.text.reverse};

  &:hover {
    background-color: ${props =>
      props.disabled
        ? props.theme.inactive
        : eval(
            `props.theme.${props.hoverColor ? props.hoverColor : 'brand.alt'}`,
          )};
  }

  &:active {
    box-shadow: ${props =>
      props.disabled
        ? 'none'
        : `${Shadow.low} ${hexa(props.theme.bg.reverse, 0.15)}`};
  }
`;
