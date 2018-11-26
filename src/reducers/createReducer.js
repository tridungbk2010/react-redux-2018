import { produce } from 'immer';

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return produce(state, draft => {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](draft, action);
      } else {
        return state;
      }
    });
  };
}

export default createReducer;
