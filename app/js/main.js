var App = App || {};

// first make sure that requirejs config is loaded as it contains
// all the main configuration for the application
require( [ "../config/require-config" ], function() {
	
	// implicitly load main application dependencies
	require( [ "jquery-migrate" ], function() {

		// finally load application itself
		require( [ "../config/app", "src/application", "src/core" ],
			function( config, Application, Core ) {
			App = Application;

			App.addInitializer( function( options ) {
				options = _.extend( options, {
					region_manager : App
				} );

				Core.init( config );
			} );

			App.start( config );
		} );
	} );
} );
