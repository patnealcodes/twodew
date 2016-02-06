(function () {
	'use strict';

	angular
		.module('twodew')
		.directive('doing', doing);

	function doing() {
		var directive = {
			controller: 'DoingController',
			controllerAs: 'doingCtrl',
			link: link,
			replace: true,
			restrict: 'E',
			templateUrl: 'js/doing/doing.html',
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

