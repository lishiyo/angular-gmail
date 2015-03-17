'use strict';

angular
    .module('myApp.routes', ['ui.router'])
    .config(config);

function config ($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /inbox
	$urlRouterProvider.otherwise("/inbox");
	
	$stateProvider
		.state('inbox', {
			url: "/inbox",
			templateUrl: 'views/inbox.html',
			controller: 'InboxCtrl',
			controllerAs: 'inbox'
		})
		.state('inboxEmail', {
			url: '/inbox/email/:id',
		 	templateUrl: 'views/email.html',
		 	controller: 'EmailCtrl',
		 	controllerAs: 'email'
		});
	
}