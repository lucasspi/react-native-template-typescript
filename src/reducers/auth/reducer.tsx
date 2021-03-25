const AuthReducer = (
  state = {
    loading: false,
    userAuthenticated: false,
  },
  action: any
) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "PERFORM_AUTH_LOADER":
      newState.loading = action.loading;
      newState.error = "";
      return newState;

    case "PERFORM_LOGIN_SUCCESS":
      newState.loading = action.loading;
      newState.userAuthenticated = true;
      newState.authToken = action.authToken ? action.authToken : "";
      newState.error = "";
      return newState;

    default:
      return newState;
  }
};
export default AuthReducer;
