<template>
  <section class="app">
    <the-header></the-header>
    <the-main></the-main>
  </section>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  height: 100vh;
  background-color: #eee
}
</style>
