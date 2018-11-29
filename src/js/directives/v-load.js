module.exports = {

  bind( el, binding, vnode ) {
    this.handler = function ( e ) {
      e.preventDefault();
      const url = el.href || binding.value;

      if ( typeof vnode.context.loadContent === 'function' ) {
        vnode.context.loadContent( url, vnode.context.$options.methods );
      } else {
        document.location = url;
      }
    };

    el.addEventListener( 'click', this.handler );
  },

  unbind( el ) {
    el.removeEventListener( 'click', this.handler );
  },

};
