(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('TasksController', TasksController);

	TasksController.$inject = ['$rootScope', '$http'];

	function TasksController($rootScope, $http) {
		var tasksCtrl = this;
		tasksCtrl.title = 'TasksController';

		activate();

		function activate() {
			$http
				.get('data/data.json')
				.then(function (response) {
					var responseData = response.data;

					$rootScope.tasks = responseData;
					tasksCtrl.all = responseData.todo.concat(responseData.doing, responseData.done).sort();
					tasksCtrl.todo = responseData.todo.sort();
					tasksCtrl.doing = responseData.doing.sort();
					tasksCtrl.done = responseData.done.sort();
				})
			;
		}
	}

})();

