(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('all', all);

	function all() {
		var directive = {
			controller: 'TasksController',
			controllerAs: 'tasksCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/all/all.html',
			scope: {}
		};
		return directive;

		function link(scope, element, attrs) {
			var $el = $(element);

			scope.$masonry = $el.masonry({
				itemSelector: '.td-task',
				gutter: '.td-tasks-gutter-width',
				percentPosition: true
			});
		}
	}

})();

