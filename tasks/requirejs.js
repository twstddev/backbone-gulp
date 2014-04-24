module.exports = function( gulp ) {
	gulp.task( "requirejs", function() {
		return plugins.requirejs( {
			baseUrl : get_application_path( "/" ),
			   out : "main.js",
			   removeCombined : true,
			   findNestedDependencies: true,
			   include : [ "requirejs" ],
			   name : "js/main",
			   wrapShim : true,
			   paths : {
				   "requirejs" : "libs/requirejs/require",
				   "jquery" : "libs/jquery/dist/jquery",
				   "jquery-migrate" : "libs/jquery-migrate/jquery-migrate",
				   "underscore" : "libs/lodash/dist/lodash.underscore",
				   "backbone" : "libs/backbone/backbone",
				   "marionette" : "libs/marionette/lib/backbone.marionette",
				   "handlebars" : "libs/handlebars/handlebars.runtime"
			   },

			   shim : {
				   "jquery" : {
					   exports : "$"
				   },
				   "jquery-migrate" : {
					   deps : [ "jquery" ],
					   exports : "$"
				   },
				   "underscore" : {
					   exports : "_"
				   },
				   "backbone" : {
					   deps : [ "underscore", "jquery" ],
					   exports : "Backbone"
				   },
				   "marionette" : {
					   deps : [ "backbone" ],
					   exports : "Marionette"
				   },
				   "handlebars" : {
					   exports : "Handlebars"
				   }
			   }
		} )
		//.pipe( plugins.uglify() )
		.pipe( gulp.dest( config.dist + "/js" ) );
	} );
}
