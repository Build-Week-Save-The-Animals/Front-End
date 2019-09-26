import { axiosWithAuth } from '../utils';
import qs from 'qs';

export const LOGIN = 'LOGIN';
export const LOGIN_RESULT = 'LOGIN_RESULT';
export const FETCH_CAMPAIGNS_ALL = 'FETCH_CAMPAIGNS_ALL';
export const FETCH_CAMPAIGNS_ALL_SUCCESS = 'FETCH_CAMPAIGNS_ALL_SUCCESS';
export const ADD_CAMPAIGN = 'ADD_CAMPAIGN';
export const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN_SUCCESS';
export const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
export const UPDATE_CAMPAIGN_SUCCESS = 'UPDATE_CAMPAIGN_SUCCESS';
export const DELETE_CAMPAIGN = 'DELETE_CAMPAIGN';
export const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS';
export const USER_INFO_FETCH_SUCCESS = 'USER_INFO_FETCH_SUCCESS';
export const DONATE_CAMPAIGN = 'DONATE_CAMPAIGN';
export const DONATE_CAMPAIGN_SUCCESS = 'DONATE_CAMPAIGN_SUCCESS';
export const USER_CREATE = 'USER_CREATE';
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS';
export const USER_CREATE_FAILURE = 'USER_CREATE_FAILURE';

export const doLogin = data => dispatch => {
  dispatch({ type: LOGIN, payload: data });

  axiosWithAuth().post('/login', qs.stringify({ ...data, grant_type: 'password' }))
    .then(response => {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("tokenType", response.data.token_type);

      return getUserInfo()(dispatch);
    })
    .then(user => {
      dispatch({ type: LOGIN_RESULT, payload: { success: true, user } });
      console.log('Successful login', user);
    })
    .catch(error => {
      console.log('Login failed', error);

      dispatch({
        type: LOGIN_RESULT,
        payload: {
          success: false,
          message: error.response.data.error_description || error.response.data.error,
        },
      });
    });
};

export const getUserInfo = () => dispatch => {
  return new Promise((resolve, reject) => {
    axiosWithAuth().get('/users/getuser')
      .then(response => {
        dispatch({ type: USER_INFO_FETCH_SUCCESS, payload: response.data });
        resolve(response.data);
      })
      .catch(error => {
        console.log('Could not get user info', error);
        reject(error);
      });
  });
};

export const getAllCampaigns = () => dispatch => {
  dispatch({ type: FETCH_CAMPAIGNS_ALL });

  axiosWithAuth().get('/campaigns/all')
    .then(response => dispatch({ type: FETCH_CAMPAIGNS_ALL_SUCCESS, payload: response.data }))
    .catch(error => console.log('Fetch all campaigns error', error));
};

export const addCampaign = campaign => dispatch => {
  dispatch({ type: ADD_CAMPAIGN, payload: campaign });

  axiosWithAuth().post('/campaigns/campaign/add', campaign)
    .then(response => dispatch({ type: ADD_CAMPAIGN_SUCCESS, payload: response.data }))
    .catch(error => console.log('Add campaign error', error));
};

export const updateCampaign = campaign => dispatch => {
  dispatch({ type: UPDATE_CAMPAIGN, payload: campaign });

  axiosWithAuth().put(`/campaigns/campaign/update/${campaign.campaignid}`, campaign)
    .then(response => dispatch({ type: UPDATE_CAMPAIGN_SUCCESS, payload: response.data }))
    .catch(error => console.log('Update campaign error', error));
};

export const deleteCampaign = campaign => dispatch => {
  dispatch({ type: DELETE_CAMPAIGN, payload: campaign });

  axiosWithAuth().delete(`/campaigns/campaign/delete/${campaign.campaignid}`)
    .then(response => dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: response.data }))
    .catch(error => console.log('Delete campaign error', error));
};

export const donateToCampaign = (campaign, amount) => dispatch => {
  dispatch({ type: DONATE_CAMPAIGN, payload: campaign });

  axiosWithAuth().post('/campaigns/campaign/donate', { campaignid: campaign.campaignid, amount })
    .then(response =>{
      alert("Success - You Have Sent $" + amount + ".");
      dispatch({ type: DONATE_CAMPAIGN_SUCCESS, payload: response.data })
    })
    .catch(error => console.log('Donate to campaign error', error));
};

export const createUser = user => dispatch => {
  dispatch({ type: USER_CREATE, payload: user });

  axiosWithAuth().post('/createnewuser', user)
    .then(response => dispatch({ type: USER_CREATE_SUCCESS, payload: response.data }))
    .catch(error => {
      dispatch({ type: USER_CREATE_FAILURE, payload: error.message });
    });
};