describe( "FooterModule", function() {
	var FooterModule = null;
	var region = {
		show : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/footer/main" ], function( module ) {
			FooterModule = module;

			done();
		} );
	} );

	it( "adds footer layout to the given region", function() {
		var region_mock = sinon.mock( region );
		region_mock.expects( "show" ).once();

		var footer = new FooterModule( {
			region : region
		} );

		region_mock.verify();
	} );

	afterEach( function() {
		FooterModule = null;
	} );
} );
