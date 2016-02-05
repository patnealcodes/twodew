(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('SortnavController', SortnavController);

	/* @ngInject */
	function SortnavController() {
		var vm = this;
		vm.title = 'SortnavController';

		activate();

		function activate() {
		}
	}

})();

