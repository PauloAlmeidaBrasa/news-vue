import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import { useAuthStore } from './store/authStore';

const app = createApp(App);

app.use(router);
const pinia = createPinia();
app.use(pinia);

// Check auth on app start
const authStore = useAuthStore();
authStore.checkAuth();

app.mount('#app');
