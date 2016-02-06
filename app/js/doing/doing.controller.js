(function () {
	'use strict';

	angular
		.module('twodew')
		.controller('DoingController', DoingController);

	DoingController.$inject = ['$state', '$http'];

	function DoingController($state, $http) {
		var doingCtrl = this;
		doingCtrl.title = 'DoingController';

		activate();

		function activate() {
			$http.get('data/doing.json')
				.then(function (response) {
					doingCtrl.tasks = response.data;
				});
		}
	}

})();

