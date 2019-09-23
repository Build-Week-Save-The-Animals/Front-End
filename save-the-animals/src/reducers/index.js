export const root = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_EXECUTE':
      return { ...state, loggingIn: true };
    case 'LOGIN_RESULT':
      return { ...state, ...action.payload };
    default:
      return state;
  };
};