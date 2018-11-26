import { createSelector } from 'reselect';

const counterSelector = state => state.counter;

export const counterFromStore = createSelector(
  counterSelector,
  counter => counter.counter,
);
