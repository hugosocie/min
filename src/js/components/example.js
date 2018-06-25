module.exports = {

    name : 'Example',

    data : function(){
        return {}
    },

    mixins : [ ajax ],

    computed : {},

    props : [],

    watch : {},

    created : function(){},

    destroyed : function(){
        console.log( 'Component ' + this.$options.name + ' destroyed' );
    },

    mounted : function(){
        this.$nextTick( function(){
            console.log( 'Component ' + this.$options.name + ' mounted' );
        });
    },

    methods : {}

}