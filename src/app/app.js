
angular.module('slushAngularPlay', [
  'ngRoute',
  'slushAngularPlay.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/slush-angular-play/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
