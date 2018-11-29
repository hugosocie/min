//
// Bower task
// Import all Javascript dependencies from bower_components
// Bower task is currently not use, but we keep it for know just in case ...
// ==========================================================================

const Config = require( '../gulp-config' );

module.exports = function ( gulp, plugins, paths ) {
  const src = plugins.mainBowerFiles( {
    includeDev: true,
    env: Config.env,
  } );

  return function () {
    gulp.src( src )
      .pipe( plugins.filter( '**/*.js' ) )
      .pipe( plugins.concat( 'libs.js' ) )
      .pipe( plugins.uglify() )
      .pipe( gulp.dest( `${paths.dist}/js/` ) );
  };
};
