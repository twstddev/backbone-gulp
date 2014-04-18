module.exports = function( gulp ) {
	gulp.task( "open", function() {
		gulp.src( config.base + "/index.html" )
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
