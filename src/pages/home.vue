<template>
  <div class="home">

    <main-nav />

    <h1>Home.vue</h1>
    <p>Counter from store : {{ getCount }}</p>

  </div>
</template>

<script>
import MainNav from '@components/mainNav.vue';
import { mapGetters } from 'vuex';

let interval = null;

export default {

  components: {
    MainNav,
  },

  data() {
    return {
      value: 0,
    };
  },

  computed: {
    ...mapGetters( [
      'getCount',
    ] ),
  },

  mounted() {
    interval = setInterval( () => {
      this.$store.commit( 'increment' );
    }, 1000 );

    this.value++;
  },

  destroyed() {
    clearInterval( interval );
  },

};
</script>

<style>
  .home {
    background: #f0f;
  }
</style>
