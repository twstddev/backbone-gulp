define( [ "js/templates/default_page", "marionette" ],
	function( Template ) {
	/**
	 * @brief Implements default view for a page.
	 */
	var DefaultPageView = Backbone.Marionette.ItemView.extend( {
		tagName : "article",
		template : Template
	} );

	return DefaultPageView;
} );
