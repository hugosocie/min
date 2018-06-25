module.exports = {

    bind : function( el, binding, vnode ){

        this.handler = function( e ){
            e.preventDefault();
            var url = el.href || binding.value;

            if( typeof vnode.context.loadContent === 'function' ){
                vnode.context.loadContent( url, vnode.context.$options.methods );
            } else {
                document.location = url;
            }
        }.bind( this );

        el.addEventListener( 'click', this.handler );
    },

    unbind : function( el ){
        el.removeEventListener( 'click', this.handler );
    }

}