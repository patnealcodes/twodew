(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('todo', todo);

	function todo() {
		var directive = {
			controller: 'TodoController',
			controllerAs: 'todoCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/todo/todo.html',
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

