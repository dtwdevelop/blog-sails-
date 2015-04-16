
var App = angular.module('App', []);

App.controller('NewsController', function ($scope,$http) {
  $scope.title="News";

 $http.get('/list').success(function(data) {
    $scope.news = data;
  });

   $scope.orderProp = 'title';

   // $scope.test = function(ev) {
   //    alert('test');
   //  };

 

});

App.controller('CommentController', function ($scope,$http) {
  $scope.title="Comment";

 $http.get('/comment').success(function(data) {
    $scope.comments = data;
  });

   $scope.orderProp = 'date';

   // 

  // $scope.Oderby = function() {
  //     console.log("click");
      
  //   };

});