define( [ "js/templates/footer", "marionette" ],
	function( footer_template ) {
	/**
	 * @brief Represents HTML layout of the footer.
	 */
	var FooterLayout = Backbone.Marionette.Layout.extend( {
		template : footer_template
	} );

	return FooterLayout;
} );
