(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('SortnavController', SortnavController);

	SortnavController.$inject = ['$scope', '$state', 'SharedProperties'];

	function SortnavController($scope, $state, shared) {}
})();

