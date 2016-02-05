(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('sortNav', sortNav);

	sortNav.$inject = ['SharedProperties'];

	/* @ngInject */
	function sortNav(shared) {
		return {
			controller: 'SortnavController',
			controllerAs: 'sortnavCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/sortnav/sortnav.html',
			scope: {}
		};

		function link(scope, element, attr, sortnavCtrl) {}
	}

})();

