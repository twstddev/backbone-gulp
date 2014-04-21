define( [ "js/templates/header", "marionette" ], function( header_template ) {
	/**
	 * @brief Represents HTML layout of the header.
	 */
	var HeaderLayout = Backbone.Marionette.Layout.extend( {
		template : header_template
	} );

	return HeaderLayout;
} );
