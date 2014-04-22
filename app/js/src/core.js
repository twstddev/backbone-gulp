define( [ "js/modules/header/main", "js/modules/footer/main" ],
	function( HeaderModule, FooterModule ) {
	/**
	 * @brief A singleton object that creates
	 * main elements of the app.
	 */
	var Core = ( function() {
		// private scope

		/**
		 * @brief Creates the main layout of the application.
		 */
		var createMainLayout = function() {
			// Marionette forces to use non semantic layout, so we should
			// use dirty hacks to get around it
			var main_fragment = $( document.createDocumentFragment() );

			new HeaderModule( {
				fragment : main_fragment
			} );

			new FooterModule( {
				fragment : main_fragment
			} );

			$( "body" ).prepend( main_fragment );
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param Object options is a list of configuration options
			 */
			init : function( options ) {
				createMainLayout();
			}
		}
	} )();

	return Core;
} );
