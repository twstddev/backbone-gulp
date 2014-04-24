var gulp = require( "gulp" );
var path_helper = require( "path" );

GLOBAL.plugins = require( "gulp-load-plugins" )();

GLOBAL.config = {
	hostname : "localhost",
	port : 3000,
	base : "app",
	dist : "dist"
};

GLOBAL.get_application_path = function( path ) {
	return path_helper.join( GLOBAL.config.base, path );
}

GLOBAL.output_error = function( error ) {
	console.log( error.message );
}

// load tasks form the tasks directory
require( "gulp-load" )( gulp );
gulp.loadTasks( __dirname );

gulp.task( "development", [
	"clean:build",
	"karma:watch",
	"compass",
	"handlebars",
	"livereload",
	"open"
] );

gulp.task( "test", [
	"karma:test"
] );

gulp.task( "default", [
	"clean:build",
	"clean:dist",
	"compass:build",
	"handlebars:build",
	"imagemin",
	"usemin",
	"htmlmin"
] );
