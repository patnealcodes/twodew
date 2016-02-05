describe('twodew', function() {
	beforeEach(module('twodew'));

	it('should exist', function() {
		expect(angular.module('twodew')).toBeDefined();
	});

	describe('states', function() {

		var
			$rootScope,
			$state,
			$location,
			$httpBackend
		;

		beforeEach(
			inject(
				function(_$rootScope_, _$state_, _$location_) {
					$rootScope = _$rootScope_;
					$state = _$state_;
					$location = _$location_;
				}
			)
		);

		it('should have "main" route set', function() {
			expect($state.href('main')).toEqual('#/main');
		});
	});
});