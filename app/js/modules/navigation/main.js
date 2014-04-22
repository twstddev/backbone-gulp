define( [ "marionette" ], function() {
	// contains private data of the object
	var PrivateScope = function() {
		this.region = null;
	};

	/**
	 * @brief Prepares a collection of menu items.
	 *
	 * @return Backbone.Collection final collection of menu items
	 */
	PrivateScope.prototype.createMenuItems = function() {
	};

	/**
	 * @brief Adds main navigation to the application.
	 */
	var NavigationModule = Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.region = options.region;
			this.d.region.show();
			
			var menu_items = this.d.createMenuItems();
		}
	} );

	return NavigationModule;
} );
