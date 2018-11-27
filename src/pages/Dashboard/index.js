import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions';
import { getCounter } from '../../store/selectors';
import Button from '../../components/Button';

const Home = memo(({ counter, increment, decrement }) => {
  return (
    <div>
      <Button onClick={() => increment()} label="+" />
      Counter: {counter}
      <Button onClick={() => decrement()} label="-" />
    </div>
  );
});

Home.propTypes = {
  counter: PropTypes.number.isRequired,
};

// Home.defaultProps = {
//   counter: 0,
// };

const mapState = state => ({
  counter: getCounter(state),
});
export default connect(
  mapState,
  { increment, decrement },
)(Home);
