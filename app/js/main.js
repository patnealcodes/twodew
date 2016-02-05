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
					controller: 'TodoController',
					controllerAs: 'todoCtrl',
					url: '/todo',
					templateUrl: 'js/todo/todo.html'
				})
				.state('doing', {
					controller: 'DoingController',
					controllerAs: 'doingCtrl',
					url: '/doing',
					templateUrl: 'js/doing/doing.html'
				})
				.state('done', {
					controller: 'DoneController',
					controllerAs: 'doneCtrl',
					url: '/done',
					templateUrl: 'js/done/done.html'
				})
			;
		})
		.run(function($rootScope, $state) {
			$state.go('todo');
		})
	;

})();