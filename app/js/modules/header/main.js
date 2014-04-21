define( [ "js/modules/header/views/header_layout", "marionette" ],
	function( HeaderLayout ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.region = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function( layout ) {
		this.region.show( layout );
	};

	/**
	 * @brief Represents main header of the application.
	 * Manages layout and initializing of the navigation module.
	 */
	var HeaderModule = Marionette.Controller.extend( {
		/**
		 * @brief Constructor.
		 */
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.region = options.region;
			this.d.addLayout( new HeaderLayout );
		}
	} );

	return HeaderModule;
} );
