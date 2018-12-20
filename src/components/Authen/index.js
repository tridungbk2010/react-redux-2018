import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { logout } from 'store/actions';
import { getAccountInfo } from 'store/selectors';
import Button from '../Button';

function Logout({ logout, accountInfo }) {
  return !!accountInfo.token ? (
    <Button onClick={logout} label="Log out" />
  ) : (
    <Link to={'login'}>Login</Link>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  accountInfo: PropTypes.object.isRequired,
};

const mapState = state => ({
  accountInfo: getAccountInfo(state),
});

export default connect(
  mapState,
  { logout },
)(Logout);
