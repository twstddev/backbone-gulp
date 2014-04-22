describe( "Core", function() {
	var Core = null;
	var fragment_manager = null;

	beforeEach( function( done ) {
		require( [ "js/src/core" ], function( application_core ) {
			Core = application_core;

			done();
		} );

		fragment_manager = $( document.createDocumentFragment() );
	} );

	it( "creates main layout elements", function() {
		Core.init();

		expect( $( "body" ).find( "header.main" ).length ).to.be.eq( 1 );
		expect( $( "body" ).find( "footer.main" ).length ).to.be.eq( 1 );
	} );

	afterEach( function() {
		Core = null;
		fragment_manager = null;
	} );
} );
