module.exports = function( gulp ) {
	gulp.task( "htmlmin", function() {
		gulp.src( config.dist + "index.html" )
			.pipe( plugins.htmlmin( { collapseWhitespace : true } ) )
			.pipe( gulp.dest( config.dist ) );
	} );
};
