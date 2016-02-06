(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('task', task);

	task.$inject = ['$timeout'];

	function task($timeout) {
		var directive = {
			controller: 'TaskController',
			controllerAs: 'taskCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/task/task.html',
			scope: {
				task: '='
			}
		};
		return directive;

		function link(scope, element, attrs) {
			$timeout(function () {
				scope.$parent.$masonry
					.masonry('reloadItems')
					.masonry()
				;
			});
		}
	}

})();

