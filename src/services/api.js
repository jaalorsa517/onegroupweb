import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://onegroupapi.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export default axios;
