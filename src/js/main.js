const Vue = require( 'vue' );


// Register Directives
// ==========================================================================

Vue.directive( 'load', require( './directives/v-load.js' ) );


// Register Global Components
// ==========================================================================

Vue.component( 'example', require( './components/example.js' ) );


// Main Vue App
// ==========================================================================
Vue( {

  el: '#app',

  name: 'App',

  data: {},

  watch: {},

  mixins: [],

  created() {},

  mounted() {},

  methods: {},

  components: {},

} );
