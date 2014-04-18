var gulp = require( "gulp" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

GLOBAL.config = {
	hotname : "localhost",
	port : 3000,
	base : "app",
	dist : "dist"
};

// load tasks form the tasks directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", [
	"livereload"
] );
