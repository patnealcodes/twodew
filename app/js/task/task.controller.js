(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('TaskController', TaskController);

	/* @ngInject */
	function TaskController() {
		var taskCtrl = this;
		taskCtrl.title = 'TaskController';

		activate();

		function activate() {}
	}

})();

