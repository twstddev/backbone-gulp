define( [ "js/src/application" ], function() {
	describe( "Application", function() {
		it( "should be an instance of Marionette Application", function() {
			expect( [ 1, 2, 3 ] ).to.include( 2 );
		} );

		it( "should pass another test", function() {
			expect( "here" ).to.be.a( "string" );
		} );
	} );
} );
