import { createSelector } from 'redux-starter-kit';

export const getCounter = createSelector(
  ['counter'],
  counter => counter,
);
