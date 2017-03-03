var myModule = angular.module('myModule', []);
	myModule.controller('myModuleCtrl',['$scope', function($scope){
		$scope.describe = "scope绑值策略二.=与父scope中的属性进行双向绑定";
		$scope.ctrFlavor = "可口可乐";
	}]);
	
	//=与父scope中的属性进行双向绑定
	myModule.directive('drink',function(){
		return {
			restrict: 'EA',
			scope: { /*ng-isolate-scope 隔离作用域*/
				flavor : '='
			}, 
			template: '<input type="text" class="form-control" ng-model="flavor"  />'
			/*replace:true*/
		}
	});
	/* 这个例子中有两个输入框，第一个绑定了myAppCtrl控制器中的scope对象的ctrlFlavor 属性。
	 * 第二个绑定的是指令中的flavor属性。
	 * 但是在drink 指令中 scope对象的flavor 属性 用了 ”=“ ，
	 * 与父scope中的属性进行双向数据绑定。所以两个值有一个改动，另一个属性值也会改动。
	 * 
	 * 简单理解为把两个存放数据仓库给相等 A1 == B1
	 * */