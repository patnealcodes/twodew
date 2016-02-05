(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoneController', DoneController)
	;

	DoneController.$inject = ['$state', '$rootScope'];

	function DoneController($state, $rootScope) {
		$rootScope.currentSort = $state.current.name;
	}

})();

