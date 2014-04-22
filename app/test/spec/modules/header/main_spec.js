describe( "HeaderModule", function() {
	var HeaderModule = null;
	var fragment = {
		append : function() {}
	};

	beforeEach( function( done ) {
		require( [ "js/modules/header/main" ], function( module ) {
			HeaderModule = module;

			done();
		} );
	} );

	it( "adds header layout to the given fragment", function() {
		var fragment_mock = sinon.mock( fragment );
		fragment_mock.expects( "append" ).once();

		var header = new HeaderModule( {
			fragment : fragment
		} );

		fragment_mock.verify();
	} );

	afterEach( function() {
		HeaderModule = null;
	} );
} );
