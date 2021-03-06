//
// Styles task
// ==========================================================================

const Helpers = require( './_helpers' );
const Config = require( '../gulp-config' );

module.exports = function( gulp, plugins, paths, files ) {
  const includePaths = [
    require( 'node-reset-scss' ).includePath,
  ];

  Helpers.pushToWatch( files.styles, [ 'styles' ] );
  Helpers.pushToClean( `${paths.src}/sass/_build` );

  return function() {
    gulp.src( [ `${paths.src}/sass/main.scss`, `${paths.src}/sass/editor-style.scss` ] )
      .pipe( plugins.plumber() )
      .pipe( plugins.sassBulkImport() )
      .pipe( plugins.sass( {
        includePaths,
        outputStyle: Config.env === 'production' ? 'compressed' : 'nested',
      } ).on( 'error', plugins.sass.logError ) )
      .pipe( plugins.autoprefixer() )
      .pipe( gulp.dest( `${paths.dist}/css/` ) )
      .pipe( plugins.browserSync.stream() );
  };
};
