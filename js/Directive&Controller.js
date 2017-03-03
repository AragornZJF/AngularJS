var myApp = angular.module('myModule', []);
myApp.controller('myAppCtrl', ['$scope', function($scope){
    console.log($scope);
    $scope.loadData = function(){
        console.log('数据加载中.....');
    }
}]);
myApp.controller('myAppCtrl2', ['$scope', function($scope){
    console.log($scope);
    $scope.loadData2 = function(){
        console.log('数据加载中2.....');
    }
}]);
//指令与控制器之间交互
myApp.directive('loader', function(){
    return {
        restrict: 'EA',
        template: '<button ng-transclude class="btn btn-primary"></button>',
       /* templateUrl: 'inputControl.html',*/
        transclude: true,
        replace: true,
        /*scope: {}, 独立scope*/
        link: function(scope, element, attrs){
            element.bind('mouseenter', function(){
                /*这里调用controller中的方法三种方式*/
                /*(1) scope.loadData();
                  (2) scope.$apply('loadData()');
                  (3) attrs.howtoload === 属性上绑定函数名*/
                //属性方式 注意坑！！！ howtoload 得小写
                scope.$apply(attrs.howtoload);
                console.log(scope);
            })
        }
    }
})