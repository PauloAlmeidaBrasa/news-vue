<script setup>
import { onMounted } from 'vue';
import { useNewsStore } from '../store/newsStore';

const store = useNewsStore();

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  // Remove microseconds if present
  const cleaned = dateString.replace(/\.(\d{6})Z$/, 'Z');
  const date = new Date(cleaned);
  return isNaN(date.getTime()) ? dateString : date.toLocaleString();
};

onMounted(() => {
  store.fetchItems();
});
</script>

<template>
  <div>
    <h1>NEWS</h1>

    <router-link to="/login">Login</router-link> |
    <router-link to="/create">Create news</router-link>

    <div v-for="item in store.items" :key="item.id" class="news-article">
      <h2>{{ item.name || item.title }}</h2>
      <p>{{ item.text }}</p>
      <!-- <small>Created at: {{ formatDate(item.created_at) }}</small> -->
    </div>
  </div>
</template>

<style scoped>
.news-article {
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px;
}
</style>