import querystring from 'query-string';
import axios from 'axios';
import { auth } from './redux';

let instance = axios.create({
  baseURL: '/api/v1/',
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: function(params) {
    return querystring.stringify(params, { arrayFormat: 'brackets' });
  }
});

export const configureRestClient = store => {
  store.subscribe(() => {
    let token = auth(store);
    if (token) instance.defaults.headers.common['Authorization'] = token;
    else delete instance.defaults.headers.common['Authorization'];
  });
};

export default instance;
