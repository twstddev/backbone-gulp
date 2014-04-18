var gulp = require( "gulp" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

// load tasks form the gulp directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );
