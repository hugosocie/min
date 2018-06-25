var Vue    = require( 'vue' );


// Register Directives
// ==========================================================================

Vue.directive( 'load', require( './directives/v-load.js' ) );


// Register Global Components
// ==========================================================================

Vue.component( 'example', require( './components/example.js' ) );



// Main Vue App
// ==========================================================================
new Vue({

    el: '#app',

    name : 'App',

    data : {},

    watch : {},

    mixins : [],

    created : function(){
        console.log( 'Vue.js created' );
    },

    mounted : function(){},

    methods : {},

    components : {}

});