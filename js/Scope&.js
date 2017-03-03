var myModule = angular.module('myModule', []);
	myModule.controller('myModuleCtrl',['$scope', function($scope){
		$scope.sayHello = function(name){
			console.log('Hello'+name);
		}
	}]);
	myModule.directive('greeting', function(){
		return {
			restrict: 'EA',
			scope: { /*'&'传递一个来自父scope的函数，稍后调用*/
				greet : '&' 
			},
			templateUrl: 'sayHello.html'
		}
	});