(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('done', done);

	function done() {
		var directive = {
			controller: 'DoneController',
			controllerAs: 'doneCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/done/done.html',
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

