(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('sidemenu', sidemenu);

	sidemenu.$inject = ['PropsService'];

	/* @ngInject */
	function sidemenu(PropsService) {
		var directive = {
			bindToController: true,
			controller: 'SidemenuController',
			controllerAs: 'sidemenuCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/sidemenu/sidemenu.html',
			scope: {}
		};
		return directive;

		function link(scope, element, attrs) {

		}
	}

})();

