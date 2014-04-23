define( [ 
	"js/modules/pages/views/default_page",
	"js/modules/pages/collections/pages",
	"config/fixtures",
	"marionette"
	],
	function( DefaultPageView, Pages, fixtures ) {
	// private scope of the module
	var PrivateScope = function() {
		this.region = null;
		this.pages = new Pages( fixtures.pages );
	};

	/**
	 * @brief Initializes pager with the first page that should
	 * be visible on landing.
	 */
	PrivateScope.prototype.initializePage = function() {
		this.region.show( new DefaultPageView( {
			model : this.pages.findWhere( { slug : "home" } )
		} ) );
	};

	/**
	 * @brief Changes current page to one that matches
	 * provided slug.
	 *
	 * @param String slug is the requested slug
	 */
	PrivateScope.prototype.setCurrentPage = function( slug ) {
		var new_current_page = this.pages.findWhere( { slug : slug } );

		if ( new_current_page ) {
			this.region.show( new DefaultPageView( {
				model : new_current_page
			} ) );
		}
	};

	/**
	 * @brief Creates, displays and swaps application pages.
	 */
	var PageModule = Backbone.Marionette.Controller.extend( {
		initialize : function( options ) {
			// create cheshire cat
			this.d = new PrivateScope();

			this.d.region = options.region;
			this.d.initializePage();

			this.listenTo( App.vent, "pages:change", this.navigateToGivenSlug );
		},

		/**
		 * @brief Fires history navigate with the given slug.
		 */
		navigateToGivenSlug : function( slug ) {
			Backbone.history.navigate( slug );
			this.d.setCurrentPage( slug );
		}
	} );

	return PageModule;
} );
