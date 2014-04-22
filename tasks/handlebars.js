module.exports = function( gulp ) {
	var template_files = get_application_path( "templates/**/**.hbs" );

	var compile_templates = function() {
		gulp.src( template_files )
			.pipe( plugins.cached( "handlebars" ) )
			.pipe( plugins.handlebars() )
			.pipe( plugins.defineModule( "amd" ) )
			//.pipe( plugins.defineModule( "amd", {
				//wrapper : "Handlebars.default.template( <%= contents %> )"
			//} ) )
			.pipe( gulp.dest( get_application_path( "js/templates" ) ) );
	}

	gulp.task( "handlebars", function() {
		compile_templates();

		gulp.watch( template_files, compile_templates );
	} );
}
