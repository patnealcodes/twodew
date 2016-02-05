(function () {
	'use strict';

	angular
		.module('twodew')
		.service('SharedProperties', SharedProperties);

	SharedProperties.$inject = ['$state'];

	function SharedProperties($state) {
		var
			props = {
				currentSort: $state.current.name,
				menuActive: false
			}
		;

		return {
			props: props
		};
	}

})();

