(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoingController', DoingController);

	DoingController.$inject = ['$state'];

	function DoingController($state) {
		var vm = this;
		vm.title = 'DoingController';

		activate();

		function activate() {
			console.log($state.current.name);
		}
	}

})();

