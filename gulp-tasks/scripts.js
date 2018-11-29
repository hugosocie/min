//
// Scripts task
// ==========================================================================

const Helpers = require( './_helpers' );
const Config = require( '../gulp-config' );

module.exports = function ( gulp, plugins, paths, files ) {
  const src = `./${paths.src}/js/main.js`;

  return function () {
    gulp.src( src )
      .pipe( plugins.plumber() )
      .pipe( plugins.webpackStream( {
        watch: true,
        resolve: {
          alias: {
            vue$: Config.env === 'development' ? 'vue/dist/vue.common.js' : 'vue/dist/vue.min.js',
          },
          moduleDirectories: [ './node_modules' ],
        },
        entry: {
          main: src,
        },
        output: {
          filename: '[name].js',
        },
        module: {
          loaders: [
            {
              test: /\.vue$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'vue-loader',
            },
          ],
        },
      }, null, ( err, stats ) => {
        plugins.browserSync.reload();
      } ) )
      .pipe( plugins.if( Config.env === 'production', plugins.uglify() ) )
      .pipe( gulp.dest( `${paths.dist}/js/` ) );
  };
};
