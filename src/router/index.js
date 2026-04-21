import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/newsView.vue';
import CreateNewsView from '../views/CreateNewsView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/', component: NewsView },
  { path: '/create', component: CreateNewsView },
  { path: '/login', component: LoginView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});