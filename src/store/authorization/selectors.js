export const authIsAuthorizedSelector = (state) => state.authorization.authorized;
export const authLoadingSelector = (state) => state.authorization.loading;
export const authErrorSelector = (state) => state.authorization.error;
export const authStatusSelector = (state) => state.authorization.status;