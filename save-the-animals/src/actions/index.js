export const doLogin = data => dispatch => {
  dispatch({ type: 'LOGIN_EXECUTE', payload: data });
  dispatch({ type: 'LOGIN_RESULT', payload: { success: false, message: 'Invalid credentials.' } });
};