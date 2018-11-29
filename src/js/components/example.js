module.exports = {

  name: 'Example',

  data() {
    return {};
  },

  mixins: [],

  computed: {},

  props: [],

  watch: {},

  created() {},

  destroyed() {
    console.log( `Component ${this.$options.name} destroyed` );
  },

  mounted() {
    this.$nextTick( () => {
      console.log( `Component ${this.$options.name} mounted` );
    } );
  },

  methods: {},

};
