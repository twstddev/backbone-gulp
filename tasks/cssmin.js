module.exports = function( gulp ) {
	gulp.task( "cssmin", function() {
		gulp.src( get_application_path( "css/main.css" ) )
			.pipe( plugins.cssmin() )
			.pipe( gulp.dest( config.dist + "/css" ) );
	} );
};
