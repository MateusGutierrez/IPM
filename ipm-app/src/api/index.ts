import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ipm-jsc4.onrender.com/',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 80000
});
