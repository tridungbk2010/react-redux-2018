import { createReducer } from 'redux-starter-kit';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from './actions';

const initalState = {
  accountInfo: {
    email: '',
    password: '',
    token: '',
  },
  loading: false,
  error: false,
  errorMessage: null,
};

export default createReducer(initalState, {
  [loginRequest]: state => {
    state.loading = true;
  },
  [loginSuccess]: (state, action) => {
    state.loading = false;
    state.accountInfo = action.payload;
  },
  [loginFailure]: (state, action) => {
    state.loading = false;
    state.error = true;
    state.errorMessage = action.payload.message;
  },
  [logoutSuccess]: state => {
    state.accountInfo = initalState.accountInfo;
  },
});
