module.exports = function( gulp ) {
	gulp.task( "scripts", function() {
		gulp.src( get_application_path( "libs/selectivizr/selectivizr.js" ) )
			.pipe( plugins.rename( "conditional.js" ) )
			.pipe( gulp.dest( config.dist + "/js" ) );
	} );
};
