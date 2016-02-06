(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('SidemenuController', SidemenuController);

	SidemenuController.$inject = ['$rootScope'];

	/* @ngInject */
	function SidemenuController($rootScope) {
		var sidemenuCtrl = this;

		sidemenuCtrl.title = 'SidemenuController';

		sidemenuCtrl.toggleMenu = function () {
			$rootScope.activeMenu = !$rootScope.activeMenu;
		};

		activate();

		function activate() {
			$rootScope.activeMenu = false;
		}
	}

})();

