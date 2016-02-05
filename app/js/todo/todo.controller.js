(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('TodoController', TodoController);

	TodoController.$inject = ['$state'];

	function TodoController($state) {
		var vm = this;
		vm.title = 'TodoController';

		activate();

		function activate() {
			console.log($state.current.name);
		}
	}

})();

