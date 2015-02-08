'use strict';

angular
  .module('projectDesperado', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ipCookie',
    'ng-token-auth'
  ])
  .config(function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
