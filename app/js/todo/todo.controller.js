(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('TodoController', TodoController);

	TodoController.$inject = ['$state', '$http'];

	function TodoController($state, $http) {
		var todoCtrl = this;
		todoCtrl.title = 'TodoController';

		activate();

		function activate() {
			$http.get('data/todo.json')
				.then(function (response) {
					todoCtrl.tasks = response.data;
				});
		}
	}

})();

