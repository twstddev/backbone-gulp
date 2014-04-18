module.exports = function( gulp ) {
	gulp.task( "open", function() {
		gulp.src( get_application_path( "index.html" ) )
			.pipe( plugins.open( "", {
				url : [
					"http://",
					config.hostname,
					":",
					config.port
				].join( "")
			} ) );
	} );
}
