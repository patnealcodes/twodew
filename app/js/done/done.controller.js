(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoneController', DoneController);

	DoneController.$inject = ['$state', '$http'];

	function DoneController($state, $http) {
		var doneCtrl = this;
		doneCtrl.title = 'DoneController';

		activate();

		function activate() {
			$http.get('data/done.json')
				.then(function (response) {
					doneCtrl.tasks = response.data;
				});
		}
	}

})();

