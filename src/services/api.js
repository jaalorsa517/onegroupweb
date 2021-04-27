import Axios from 'axios';

const axios = Axios.create({
  //   baseURL: 'https://onegroupapi.herokuapp.com/api/v1',
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

export default axios;
