

import axios from 'axios';

const http = axios.create({
  //baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});


export default http;
