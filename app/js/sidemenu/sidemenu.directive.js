(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('sidemenu', sidemenu);

	function sidemenu() {
		var directive = {
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/sidemenu/sidemenu.html',
			scope: {}
		};
		return directive;

		function link(scope, element, attrs) {}
	}

})();

