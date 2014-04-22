define( [ "js/modules/footer/views/footer_layout", "marionette" ],
	function( FooterLayout ) {
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
	 * @brief Represents main footer of the application.
	 */
	var FooterModule = Marionette.Controller.extend( {
		/**
		 * @brief Constructor.
		 */
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.region = options.region;
			this.d.addLayout( new FooterLayout );
		}
	} );

	return FooterModule;

} );
