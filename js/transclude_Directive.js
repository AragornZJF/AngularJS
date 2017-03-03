var myModule = angular.module('myModule',[]);

myModule.directive('hello', function(){
	return {
		restrict: 'AE',
		template: '<p>Hello<b ng-transclude></b><p>',
		transclude: true  //是否将当前元素的内容转移到模板中
	}
});