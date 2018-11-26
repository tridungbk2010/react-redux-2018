import createReducer from './createReducer';
import { INCREMENT, DECREMENT } from '../actions/counter';

const initalState = {
  counter: 0,
};

export default createReducer(initalState, {
  [INCREMENT]: state => {
    state.counter += 1;
  },
  [DECREMENT]: state => {
    state.counter -= 1;
  },
});
