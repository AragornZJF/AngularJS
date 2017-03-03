var myApp = angular.module('myApp', []);
myApp.controller('myAppCtrl1', [
	function($scope){
		
	}
]);

myApp.controller('myAppCtrl2', [
	function($scope){
		
	}
]);

myApp.directive('hello', function(){
	return {
		restrict: 'AE',
		templateUrl : 'template.html',
		transclude: true
	}
});