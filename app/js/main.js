var App = App || {};

// first make sure that requirejs config is loaded as it contains
// all the main configuration for the application
require( [ "../config/require-config" ], function() {
	
	// implicitly load main application dependencies
	require( [ "jquery-migrate", "marionette" ], function() {

		// finally load application itself
		require( [ "../config/app", "src/application" ], function( config, Application ) {
			App = Application;
			App.start( config );
		} );
	} );
} );
