var myModule = angular.module('myModule',[]);
//指令与指令之间交互
myModule.directive('superman', function(){
	return {
		scope: {},/*独立作用域*/
		restrict: 'AE',
		template: '<button class="btn btn-primary" ng-transclude></button>',
		transclude: true,
		controller: function($scope){ /*暴露controller里面方法*/
			$scope.abilities  = [];
			this.addStrength = function(){
				$scope.abilities.push('strength');
				
			};
			this.addSpeed = function(){
				$scope.abilities.push('speed');
			};
			this.addLight = function(){
				$scope.abilities.push('light');
			};
		},
		link: function(scope, element, attrs, supermanCtr){
			element.addClass = "btn btn-primary";
			element.bind('mouseenter', function(){
				console.log(scope.abilities);
			})
		}
	}
})

myModule.directive('strength', function(){
	return {
		require: "^superman",/*require参数指明需要依赖的指令*/
		link: function(scope, element, attrs, supermanCtr){
			supermanCtr.addStrength();
		}
	}
});

myModule.directive('speed', function(){
	return {
		require: "^superman",
		link: function(scope, element, attrs, supermanCtr){
			supermanCtr.addSpeed();
		}
	}
});

myModule.directive('light', function(){
	return {
		require: "^superman",
		link: function(scope, element, attrs, supermanCtr){
			supermanCtr.addLight();
		}
	}
});