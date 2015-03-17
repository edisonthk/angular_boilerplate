'use strict';

angular.module('app.controllers',[])
	.controller('MyController', ['$scope','$rootScope','$state', '$stateParams',function($scope, $rootScope, $state, $stateParams){

		

		$scope.kw = "";
		$scope.hello = "Hello!! It is Edisonthk AngularJS boilerplate";


		// $scope.$watch(function(){
		// 	return $scope.kw;
		// }, function() {
		// 	console.log($scope.kw);
		// });

		console.log();

		var imgLoaded = false;
		var loadedNumber = 0;
		

		$scope.clickEvent = function(a){
			console.log("clicked");
			$rootScope.AnimatorEngine.playAnimator(a);
		};



		var cnt = 0;
		setInterval(function(){
			if(imgLoaded){

				if(cnt < infoImgs.length){
					console.log("fsdf");
					$scope.animator = infoImgs[cnt].src;
					$scope.$apply();

					cnt += 1;
				}
				
			}
		},1000/25);

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$scope.hello = "It is "+toState.name;
		});

	}]);