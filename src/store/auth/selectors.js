import { createSelector } from 'redux-starter-kit';

export const authSelector = createSelector(
  ['auth'],
  auth => auth,
);

export const getAccountInfo = createSelector(
  [authSelector],
  auth => auth.accountInfo,
);

export const getLoginLoading = createSelector(
  [authSelector],
  auth => auth.loading,
);

export const getLoginError = createSelector(
  [authSelector],
  auth => ({
    error: auth.error,
    message: auth.errorMessage,
  }),
);
