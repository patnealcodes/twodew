(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('SidemenuController', SidemenuController)
	;

	SidemenuController.$inject = ['SharedProperties'];

	function SidemenuController( shared ) {

		var sidemenuCtrl = this;

		sidemenuCtrl.menuBool = function () {
			return shared.props.menuActive;
		};

		sidemenuCtrl.toggleMenu = function () {
			shared.props.menuActive = !shared.props.menuActive;
		};
	}

})();



