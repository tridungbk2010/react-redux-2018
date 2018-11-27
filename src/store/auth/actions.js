import { createAction } from 'redux-starter-kit';

const ACCOUNT_FAKE = {
  email: 'test@gmail.com',
  password: '666666',
};
const apiCall = (accountInfo, ms) =>
  new Promise((resolve, reject) => {
    if (
      accountInfo.email === ACCOUNT_FAKE.email &&
      accountInfo.password === ACCOUNT_FAKE.password
    ) {
      resolve({
        email: accountInfo.email,
        token: '98793oljlsjlxxw837sdf',
      });
    } else {
      reject({ message: 'Wrong account info' });
    }
  });

export const loginRequest = createAction('loginRequest');
export const loginSuccess = createAction('loginSuccess');
export const loginFailure = createAction('loginFailure');

export const logoutSuccess = createAction('logoutSuccess');

export const login = params => async dispatch => {
  dispatch(loginRequest());
  try {
    const accountInfo = await apiCall(params);
    dispatch(loginSuccess(accountInfo));
  } catch (e) {
    dispatch(loginFailure(e));
  }
};

export const logout = () => logoutSuccess();
