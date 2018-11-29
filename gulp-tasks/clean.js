//
// Clean task
// ==========================================================================

const Data = require( './_data' );
const Helpers = require( './_helpers' );

module.exports = function ( gulp, plugins, paths ) {
  Helpers.pushToClean( paths.dist );

  return function () {
    plugins.del( Data.clean );
  };
};
