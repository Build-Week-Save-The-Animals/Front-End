import { axiosWithAuth } from '../utils';
import qs from 'qs';

export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const FETCH_CAMPAIGNS_ALL = 'FETCH_CAMPAIGNS_ALL';
export const FETCH_CAMPAIGNS_ALL_RESULT = 'FETCH_CAMPAIGNS_ALL_RESULT';

export const doLogin = data => dispatch => {
  dispatch({ type: LOGIN, payload: data });

  axiosWithAuth().post('/login', qs.stringify({ ...data, grant_type: 'password' }))
    .then(response => {
      console.log('Successful login', response.data);

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("tokenType", response.data.token_type);
      dispatch({ type: LOGIN_RESULT, payload: { success: true } });
    })
    .catch(error => {
      console.log('Login failed', error);

      dispatch({
        type: LOGIN_RESULT, payload: {
          success: false,
          message: error.response.data.error_description || error.response.data.error,
        }
      });
    });
};

export const getAllCampaigns = () => dispatch => {
  dispatch({ type: FETCH_CAMPAIGNS_ALL });

  axiosWithAuth().get('/campaigns/all')
    .then(response => dispatch({ type: FETCH_CAMPAIGNS_ALL_RESULT, payload: response.data }))
    .catch(error => console.log('Fetch all campaigns error', error));
};