(function () {
	'use strict';

	angular
		.module('twodew')
		.service('PropsService', PropsService);

	function PropsService() {
		var props = {
			activeMenu: false
		};

		function getProps() {
			return props;
		}

		function setProps( key, value ) {
			props[key] = value;
		}

		return {
			getProps: getProps,
			setProps: setProps
		};
	}

})();

