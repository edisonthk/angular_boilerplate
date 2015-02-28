angular.module('app',['ui.router', 'app.controllers'])

	.config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider){

		$stateProvider
			.state('state1',{
				url: "/state1"
			})
			.state('state2',{
				url: "/state2"
			});


		// $locationProvider.html5Mode(!0).hashPrefix("!");
	}]);