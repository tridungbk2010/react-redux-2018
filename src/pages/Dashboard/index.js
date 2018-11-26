import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { increment, decrement } from '../../actions/counter';
import { counterFromStore } from '../../selectors/counter-selector';

const Home = ({ counter, increment, decrement }) => {
  return (
    <div>
      <Button onClick={() => increment()} label="+" />
      Counter: {counter}
      <Button onClick={() => decrement()} label="-" />
    </div>
  );
};

Home.propTypes = {
  counter: PropTypes.number.isRequired,
};

// Home.defaultProps = {
//   counter: 0,
// };

const mapState = state => ({
  counter: counterFromStore(state),
});
export default connect(
  mapState,
  { increment, decrement },
)(Home);
