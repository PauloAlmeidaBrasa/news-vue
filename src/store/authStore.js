import { defineStore } from 'pinia';
import api from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: sessionStorage.getItem('token') || null,
    user: null,
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await api.post('/login', credentials);
        this.token = response.data.access_token;
        this.user = response.data.user;
        sessionStorage.setItem('token', this.token);
        return true;
      } catch (error) {
        console.error('Login failed:', error);
        return false;
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      sessionStorage.removeItem('token');
    },

    checkAuth() {
      if (this.token) {
        // Token is already in sessionStorage, interceptor will use it
      }
    },
  },
});