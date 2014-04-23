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
	};

	/**
	 * @brief Prepares list of pages.
	 */
	PrivateScope.prototype.createPages = function() {
		return new Pages( fixtures.pages );
	}

	/**
	 * @brief Initializes pager with the first page that should
	 * be visible on landing.
	 */
	PrivateScope.prototype.initializePage = function() {
		var pages = this.createPages();

		this.region.show( new DefaultPageView( {
			model : pages.findWhere( { slug : "home" } )
		} ) );
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
		}
	} );

	return PageModule;
} );
