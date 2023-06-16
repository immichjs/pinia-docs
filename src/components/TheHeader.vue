<template>
  <header class="header">
    <h1>Aprendendo Pinia</h1>
    <div class="header__icon">
      <div class="header__favorites-count">{{ favoriteCount }}</div>
      
      <i class="bx bx-heart"></i>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFavoriteStore } from '../stores/favorites';
const store = useFavoriteStore()
const { favoriteCount } = storeToRefs(store)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  height: 80px;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.header__icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid #ddd;
  font-size: 1.25rem;
  color: #ddd;
  cursor: pointer;

}

.header__favorites-count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background: rgb(255, 71, 71);
  border-radius: 100%;
  top: 0;
  right: 0;
  color: #fff;
  font-size: 0.75rem;
}
</style>
