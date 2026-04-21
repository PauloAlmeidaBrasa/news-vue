import { defineStore } from 'pinia';
import api from '../services/api';

export const useNewsStore = defineStore('item', {
  state: () => ({
    items: [],
  }),

  actions: {
    async fetchItems() {
      try {
        const response = await api.get('/news/get');
        console.log('API response:', response.data.data.news);
        this.items = response.data.data.news

      } catch (error) {
        console.error('Error fetching news:', error);
        this.items = [];
      }
    },

    async createItem(data) {
      await api.post('/news', data);
      await this.fetchItems();
    },
  },
});