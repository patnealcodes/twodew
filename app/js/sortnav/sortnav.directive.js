(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('sortnav', sortnav);

	function sortnav() {
		var directive = {
			controller: 'SortnavController',
			controllerAs: 'sortnavCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/sortnav/sortnav.html',
			scope: {}
		};
		return directive;

		function link(scope, element, attrs) {}
	}

})();
