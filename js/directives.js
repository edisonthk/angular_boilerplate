'use strict';

angular.module('app.directives',[])
	.directive('animator',['$rootScope',function($rootScope){

		return {
			scope: {
				id: '@'
			},
			transclude: true,
			template: '<div class="animator"><img /><ng-transclude /></div>',
			link: function(scope, element, attrs, ctrl){
				if(typeof $rootScope.AnimatorEngine === "undefined"){
					console.log("intial");
					$rootScope.AnimatorEngine = new AnimatorEngine();
				}


				var infoImgs = [];
				for (var i = 0; i < 19; i++) {
					var leadingZeroName = ("00000" + i).substr(-4);
					infoImgs.push("imgs/info/info"+leadingZeroName+".png");
				};
				
				
				$rootScope.AnimatorEngine.registerAnimator(scope.id,{
					element: element.find("img")[0],
					frames: infoImgs
				});
		      // scope.image = "imgs/info/info0001.png";
		    },    
		};
	}]);