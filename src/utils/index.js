import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const tokenType = localStorage.getItem('tokenType');

  return axios.create({
    baseURL: "https://build-save-the-animals.herokuapp.com",
    headers: {
      Authorization: token ? `${tokenType} ${token}` : `Basic ${btoa('client:secret')}`,
    },
  });
}

export const getUserCampaigns = id => axiosWithAuth().get(`/campaigns/byuser/${id}`);