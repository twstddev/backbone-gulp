describe( "HeaderModule", function() {
	var HeaderModule = null;
	var region = {
		show : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/header/main" ], function( module ) {
			console.log( "here" );
			HeaderModule = module;

			done();
		} );
	} );

	it( "adds header layout to the given region", function() {
		var region_mock = sinon.mock( region );
		region_mock.expects( "show" ).once();

		var header = new HeaderModule( {
			region : region
		} );

		region_mock.verify();
	} );

	afterEach( function() {
		HeaderModule = null;
	} );
} );
