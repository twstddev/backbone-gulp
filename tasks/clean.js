module.exports = function( gulp ) {
	gulp.task( "clean:build", function() {
		var build_files = [
			get_application_path( "css" ),
			get_application_path( "js/templates" )
		];
		gulp.src( build_files, { read : false } )
			.pipe( plugins.clean( { force : true } ) );
	} );

	gulp.task( "clean:dist", function() {
		gulp.src( config.dist, { read : false } )
			.pipe( plugins.clean( { force : true } ) );
	} );
};
