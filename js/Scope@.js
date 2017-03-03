var myModule = angular.module('myModule', []);
	myModule.controller('myAppCtrl',['$scope', function($scope){
		console.log($scope);
		$scope.ctrFlavor = "百事可乐";
	}]);
	
	myModule.directive('drink', function(){
		return {
			restrict: 'AE',
			scope: { /*独立scope作用域*/
				flavor: '@'
			}, 
			replace:true,
			template: '<p>{{flavor}}</p>'
			//使用link进行指令和控制器两个作用域中数据的绑定。
			//如果用scope中@的话，就不需要link这么麻烦了，angularJS会自动进行绑定
			/*,
			link:function(scope,element,attrs){ 
				element.bind('mouseenter', function(){
				})
				scope.flavor = attrs.flavor;
			}*/
		}
	})