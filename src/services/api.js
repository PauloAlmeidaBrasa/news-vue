import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1', // proxy to backend
  withCredentials: true, // important if using Sanctum
});

// Add request interceptor to include JWT token
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;