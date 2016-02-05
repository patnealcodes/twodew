(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoneController', DoneController);

	DoneController.$inject = ['$state'];

	function DoneController($state) {
		var vm = this;
		vm.title = 'DoneController';

		activate();

		function activate() {
			console.log($state.current.name);
		}
	}

})();

