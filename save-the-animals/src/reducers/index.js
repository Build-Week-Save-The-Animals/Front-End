export const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_EXECUTE':
      return { ...state, processing: true };
    case 'LOGIN_RESULT':
      return { ...state, ...action.payload, processing: false };
    default:
      return state;
  };
};