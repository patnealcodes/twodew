(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('SortnavController', SortnavController);

	/* @ngInject */
	function SortnavController() {
		var sortnavCtrl = this;
		sortnavCtrl.title = 'SortnavController';

		activate();

		function activate() {
		}
	}

})();

