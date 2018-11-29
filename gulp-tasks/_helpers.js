//
// Bower task
// Import all Javascript dependencies from bower_components
// ==========================================================================

const Data = require( './_data' );

module.exports = ( function () {
  return {

    pushToWatch( path, script ) {
      Data.watch.push( {
        path,
        script,
      } );
    },

    pushToClean( path ) {
      Data.clean.push( path );
    },

  };
}() );
