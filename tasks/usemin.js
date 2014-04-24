module.exports = function( gulp ) {
	gulp.task( "usemin", function() {
		gulp.src( get_application_path( "index.html" ) )
			.pipe( plugins.usemin() )
			.pipe( gulp.dest( config.dist ) );
	} );
}
