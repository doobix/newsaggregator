angular.module('posts', [
  'posts.directive',
  'services'
  ])
	.controller('PostsController', function($scope, $http) {
    $http.get('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://kiafathi.azurewebsites.net/rss/')
      .success(function(res) {
        console.log(res);
      });
	})
  .controller('clicker', function($scope, GetPosts) {
    $scope.clicked = function() {
      console.log('clicked');
    };

    $scope.getPosts = function() {
      GetPosts.gotten().success(function(posts) {
        angular.forEach(posts.data.children, function(value, key) {
          console.log("value",value);
        })
        console.log("success", posts);
        // $scope.data.posts = posts;
      });
    };
  })
