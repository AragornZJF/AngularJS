//调用angular对象的module方法来声明一个模块，模块的名字和ng-app的值对应
var myModule = angular.module('myModule',[]);

//指令 对元素绑定事件监听或者改变DOM
/* restrict 属性值说明  <推荐使用EA>
 * E--element元素 <hello></hello>
 * A--attribute 属性 <div hello></div>
 * C-class 样式类  <div class="hello"></div>
 * M 注释   <!-- directive:hello -->
 */
myModule.directive('hello', function(){
	return {
		restrict: 'AECM',
		/*template:'<p>Hello Angular</p>',*/
		templateUrl: 'templs/hello.html',
		replace:true
	}
})