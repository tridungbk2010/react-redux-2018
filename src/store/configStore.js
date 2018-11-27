import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import reducer from './reducer';
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';

const middleware = [...getDefaultMiddleware(), logger];

const preloadedState = {
  counter: 10,
};

export const initStore = initialState => {
  const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [reduxBatch],
  });
  return store;
};
