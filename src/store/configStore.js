import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const initStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState || {},
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
