import axios from 'axios';
import * as URLS from '../constant/constant';
import queryString from 'query-string';

export const axiosClientFile = axios.create({
  baseURL: URLS.BASE_URL, 
  headers: {
    'content-type': 'multipart/form-data', 
  }
  // ,
  // paramsSerializer: params => {
  //   return queryString.stringify(params, {
  //     encode: false,
  //   });
  // },
});


axiosClientFile.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClientFile.interceptors.response.use(
  response => {
    if (response && response.data) { 
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);