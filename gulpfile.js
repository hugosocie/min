//
// Import main depdendencies
// ==========================================================================

const gulp = require( 'gulp' );
const gulpLoadPlugins = require( 'gulp-load-plugins' );
const Config = require( './gulp-config' );


//
// Import all depdendencies with "gulpLoadPlugins"
// You need to update "pattern" for all dependencies
// that are not prefixed with "gulp-" or "gulp."
// ==========================================================================

const plugins = gulpLoadPlugins( {
  pattern: [
    'gulp-*', 'gulp.*',
    'webpack-stream',
    'browser-sync',
    'main-bower-files',
    'del',
  ],
} );


//
// Define files path and files extensions
// ==========================================================================

const files = {
  fonts: [ `${Config.paths.src}/fonts/**/*.{eot,svg,ttf,woff,woff2}` ],
  html: [ '**/*.html' ],
  php: [ '{lib,templates}/**/*.php', '*.php' ],
  images: [ `${Config.paths.src}/img/**/*.{jpg,png,gif,svg}` ],
  scripts: [ `${Config.paths.src}/js/**/*.{js,vue}` ],
  styles: [ `${Config.paths.src}/sass/**/*.scss` ],
  svg: [ `${Config.paths.src}/svg/**/*.svg` ],
};


//
// Define all tasks names by sequence
// Tasks name must be the same that the task file name in "gulp-tasks" folder
// ==========================================================================

const tasks = [

  // Main tasks
  [
    // 'bower',
    'fonts',
    'images',
    'scripts',
    'styles',
    'svg',
  ],
  [ 'watch' ],

  // other tasks
  [ 'clean' ],
];


//
// Load tasks
// ==========================================================================

const loadTasks = ( function() {
  for ( let t = 0; t < tasks.length; t++ ) {
    const _tasks = tasks[t];
    for ( let i = 0; i < _tasks.length; i++ ) {
      const name = _tasks[i];
      const path = `./gulp-tasks/${name}`;
      gulp.task( name, require( path )( gulp, plugins, Config.paths, files ) );
    }
  }
}() );


//
// Build task
// ==========================================================================

gulp.task( 'build', e => plugins.sequence( tasks[0], e ) );


//
// Default task : watch
// ==========================================================================

gulp.task( 'default', e => plugins.sequence( 'build', tasks[1], e ) );
