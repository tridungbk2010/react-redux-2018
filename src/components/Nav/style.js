import styled from 'styled-components';

export const StyledNavItem = styled.span`
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  padding: 0 20px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${props => props.theme.brand.dark};
`;
