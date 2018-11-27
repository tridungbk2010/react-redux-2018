import { createReducer } from 'redux-starter-kit';
import { increment, decrement } from './actions';

const initalState = 0;

export default createReducer(initalState, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
});
