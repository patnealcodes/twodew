(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('TodoController', TodoController)
	;

	TodoController.$inject = ['$state', '$rootScope'];

	function TodoController($state, $rootScope) {
		$rootScope.currentSort = $state.current.name;
		console.log($rootScope.currentSort);
	}

})();

