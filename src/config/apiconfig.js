import axios from 'axios';

const apiconfig = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Fetching from .env
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log('anpiconfig' + process.env.REACT_APP_API_BASE_URL);

export default apiconfig;
