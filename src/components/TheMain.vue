<template>
  <main class="main">
    <ul class="grid">
      <li class="grid__item" v-for="item in items" :key="item"> 
        <img src="../assets/logo.svg" width="48">
        <div>
          <strong>{{ item.name }}</strong>
          <p>{{ item.description }}</p>
        </div>
        <button @click="addItemOrRemoveItem(item)" :class="{ 'active': item.favorite }">
          <i class="bx bx-heart"></i>
        </button>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useFavoriteStore } from '../stores/favorites';

const store = useFavoriteStore()
const { favoriteExists, addFavorite, removeFavorite } = store


const items = reactive([{
  name: 'Pinia',
  description: 'Pinia. The intuitive store for Vue.js.',
  favorite: false
}, {
  name: 'Vue.js',
  description: 'A Estrutura JavaScript Progressiva.',
  favorite: false,
}, {
  name: 'Tailwind CSS',
  description: 'Rapidly build modern websites without ever leaving your HTML.',
  favorite: false
}])

function addItemOrRemoveItem(item) {
    const index = items.findIndex(element => element.name === item.name)
    
    if (!favoriteExists(item)) {
      items[index].favorite = true
      addFavorite(item)
    } else {
      items[index].favorite = false
      removeFavorite(item)
    }
}
</script>

<style scoped>
ul {
  padding: 0;
}
.main {
  padding: 0 8rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem
}

.grid__item {
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #cecece;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid__item button {
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: 1px solid #cecece;
  border-radius: 100%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  margin-left: auto;
  cursor: pointer;
  margin-top: auto;
}

.grid__item button:hover {
  border-color: rgb(255, 70, 70);
  color: rgb(255, 70, 70);
}

.grid__item button.active {
  background-color: rgb(255, 70, 70);
  border-color: rgb(255, 70, 70);
  color: #fff;
}
</style>
