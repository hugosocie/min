//
// Watch task
// ==========================================================================

const Data = require( './_data' );
const Helpers = require( './_helpers' );
const Config = require( '../gulp-config' );

module.exports = function( gulp, plugins, paths, files ) {
  Helpers.pushToWatch( files.html, plugins.browserSync.reload );

  return function() {
    plugins.browserSync.init( {
      port: Config.port,
      open: Config.openBrowser,
      server: {
        baseDir: './',
      },
    } );

    for ( let w = 0; w < Data.watch.length; w++ ) {
      const tsk = Data.watch[w];
      gulp.watch( tsk.path, tsk.script );
    }
  };
};
