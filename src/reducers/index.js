import * as actions from '../actions';

export const login = (state = {}, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, processing: true };
    case actions.LOGIN_RESULT:
      return { ...state, ...action.payload, processing: false };
    case actions.USER_INFO_FETCH_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  };
};

export const campaigns = (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_CAMPAIGNS_ALL_SUCCESS:
      return { ...state, campaigns: action.payload };
    default:
      return state;
  };
};