(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('sideMenu', sideMenu);

	function sideMenu() {
		return {
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/sidemenu/sidemenu.html',
			scope: {}
		};

		function link(scope, element, attrs) {
			
		}
	}

})();

