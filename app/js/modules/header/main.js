define( [ "js/modules/header/views/header_layout", "marionette" ],
	function( HeaderLayout ) {
	// contains private data of the object
	var PrivateScope = function() {
		this.fragment = null;
	};

	/**
	 * @brief Sets layout as the current one and makes it visible.
	 */
	PrivateScope.prototype.addLayout = function( layout ) {
		layout.render();
		this.fragment.append( layout.$el );
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

			this.d.fragment = options.fragment;
			this.d.addLayout( new HeaderLayout );
		}
	} );

	return HeaderModule;
} );
