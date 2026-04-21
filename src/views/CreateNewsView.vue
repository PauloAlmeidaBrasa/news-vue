<script setup>
import { ref } from 'vue';
import { useNewsStore } from '../store/newsStore';
import { useRouter } from 'vue-router';

const name = ref('');
const store = useNewsStore();
const router = useRouter();

const submit = async () => {
  await store.createItem({ name: name.value });
  router.push('/');
};
</script>

<template>
  <div>
    <h1>Create Item</h1>

    <input v-model="name" placeholder="Item name" />
    <button @click="submit">Save</button>
  </div>
</template>