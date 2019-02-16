<template>
  <div class="test">

    <main-nav />
    Test.vue

    <img :src="img">

  </div>
</template>

<script>
import MainNav from '@components/mainNav.vue';

const IMG = require( '@assets/doudouinspace-notext.jpg' );

export default {

  components: {
    MainNav,
  },

  data() {
    return {
      img: IMG,
    };
  },

};
</script>

<style lang="scss">
  .test {
    background: purple;
    background-image: url( '~@assets/doudouinspace-notext.jpg' )
  }
</style>
