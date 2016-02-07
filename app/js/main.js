(function() {
	'use strict';

	angular
		.module('twodew', [
			'ngAnimate',
			'ui.router'
		])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('all');

			$stateProvider
				.state('all', {
					url: '/all',
					template: "<all>"
				})
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