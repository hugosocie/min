<template>
  <div class="home">
    
    <main-nav />
    
    <h1>Home.vue</h1>
    <p>Counter from store : {{ getCount }}</p>
  
  </div>
</template>

<script>
  import MainNav from 'COMPONENTS/mainNav.vue'
  import { mapGetters } from 'vuex'

  let interval = null

  export default {
    
    components: {
      MainNav
    },
    
    computed: {
      ...mapGetters([
        'getCount',
      ])
    },

    mounted(){
      interval = setInterval( () => {
        this.$store.commit( 'increment' )
      }, 1000 )
    },

    destroyed(){
      clearInterval( interval )
    }

  }
</script>

<style>
  .home {
    background: green;
  }
</style>