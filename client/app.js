angular.module('app', [
  'app.services',
  'app.posts',
	'ui.route'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'posts/posts.html',
      controller: 'PostsController'
    })
  console.log($stateProvider);
})
