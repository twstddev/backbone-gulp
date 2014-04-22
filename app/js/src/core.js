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
		 *
		 * @param Object region_manager is the main manager of root regions
		 * in the app
		 */
		var createMainLayout = function( region_manager ) {
			region_manager.addRegions( {
				header : "header.main",
				main_content : "section.main",
				footer : "footer.main"
			} );

			new HeaderModule( {
				region : region_manager.header
			} );

			new FooterModule( {
				region : region_manager.footer
			} );
		};

		return {
			/**
			 * @brief Fake constructor.
			 *
			 * @param Object options is a list of configuration options
			 */
			init : function( options ) {
				createMainLayout( options.region_manager );
			}
		}
	} )();

	return Core;
} );
