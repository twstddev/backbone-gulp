describe( "Core", function() {
	var Core = null;
	var region_manager = null;

	beforeEach( function( done ) {
		require( [ "js/src/core" ], function( application_core ) {
			Core = application_core;

			done();
		} );

		region_manager = {
			addRegions : function() {},
			header : {
				show : function() {}
			},
			footer : {
				show : function() {}
			}
		};
	} );

	it( "should add main regions", function() {
		var expected_regions = {
			header : "header.main",
			main_content : "section.main",
			footer : "footer.main"
		};

		var regions_manager_mock = sinon.mock( region_manager );
		regions_manager_mock.expects( "addRegions" ).once().withArgs( expected_regions );

		Core.init( { region_manager : region_manager } );

		regions_manager_mock.verify();
	} );

	afterEach( function() {
		Core = null;
	} );
} );
