<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/authStore';

const authStore = useAuthStore();
const router = useRouter();

const credentials = ref({
  email: '',
  password: '',
});

const error = ref('');

const login = async () => {
  const success = await authStore.login(credentials.value);
  if (success) {
    router.push('/');
  } else {
    error.value = 'Invalid credentials';
  }
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="credentials.email" type="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" v-model="credentials.password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>