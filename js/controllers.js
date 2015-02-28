'use strict';

angular.module('app.controllers',[])
	.controller('MyController', ['$scope','$state', '$stateParams',function($scope, $state, $stateParams){

		$scope.hello = "Hello!! It is Edisonthk AngularJS boilerplate";

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.hello = "It is "+toState.name;
		});

	}]);