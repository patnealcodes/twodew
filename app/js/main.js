(function() {
	'use strict';

	angular
		.module('twodew', [
			'ui.router'
		])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('todo');

			$stateProvider
				.state('todo', {
					url: '/todo',
					template: "<todo>"
				})
				.state('doing', {
					url: '/doing',
					template: "<doing>"
				})
				.state('done', {
					url: '/done',
					template: "<done>"
				})
			;
		})
	;

})();