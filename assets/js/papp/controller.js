
var App = angular.module('App', []);

App.controller('NewsController', function ($scope,$http) {
  $scope.title="News";

 $http.get('/list').success(function(data) {
    $scope.news = data;
  });

   $scope.orderProp = 'title';

   $scope.test = function(ev) {
      alert('test');
    };

  // $scope.Oderby = function() {
  // 	   console.log("click");
      
  //   };

});