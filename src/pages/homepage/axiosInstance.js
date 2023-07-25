import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63bbf047fa38d30d85b54374.mockapi.io', // Your base URL here
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    console.log('Request:', config);
    return config;
  },
  (error) => {
    console.log('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log('Response:', response);
    return response;
  },
  (error) => {
    console.log('Response Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
