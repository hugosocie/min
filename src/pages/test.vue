<template>
  <div class="test">

    <main-nav />
    Test.vue

    <img :src="img" />

  </div>
</template>

<script>
import MainNav from 'COMPONENTS/mainNav.vue';

const img = require( 'ASSETS/doudouinspace-notext.jpg' );

export default {
  components: {
    MainNav,
  },
  data(){
    return {
      img: img
    }
  }
};
</script>

<style>
  .test {
    background: purple;
    background-image: url( '~ASSETS/doudouinspace-notext.jpg' )
  }
</style>
