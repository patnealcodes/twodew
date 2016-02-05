(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoingController', DoingController)
	;

	DoingController.$inject = ['$state', '$rootScope'];

	function DoingController($state, $rootScope) {
		$rootScope.currentSort = $state.current.name;
	}

})();

