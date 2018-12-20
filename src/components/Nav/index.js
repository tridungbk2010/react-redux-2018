import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledNav, StyledNavItem, StyledHeader } from './style';
import Authen from '../Authen';

function Nav({ isAuthenticated }) {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavItem>
          <Link to={'/'}>Home</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Link to={'dashboard'}>Dashboard</Link>
        </StyledNavItem>
        <StyledNavItem>
          <Authen />
        </StyledNavItem>
      </StyledNav>
    </StyledHeader>
  );
}
Nav.propTypes = {
  menus: PropTypes.array,
};

Nav.defaultProps = {
  menus: [],
};

export default Nav;
