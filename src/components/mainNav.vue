<template>
  <nav class="main-nav">

    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'test' }">Test</router-link>

  </nav>
</template>


<style>
  .main-nav {
    background: yellow;
  }
</style>
