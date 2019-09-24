import { axiosWithAuth } from '../utils';
import qs from 'qs';

export const doLogin = data => dispatch => {
  dispatch({ type: 'LOGIN_EXECUTE', payload: data });

  axiosWithAuth().post('/login', qs.stringify({ ...data, grant_type: 'password' }))
    .then(response => {
      console.log('Successful login', response.data);

      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("tokenType", response.data.token_type);
      dispatch({ type: 'LOGIN_RESULT', payload: { success: true } });
    })
    .catch(error => {
      console.log('Login failed', error);

      dispatch({
        type: 'LOGIN_RESULT', payload: {
          success: false,
          message: error.response.data.error_description || error.response.data.error,
        }
      });
    });
};