'use strict';

angular
.module('projectDesperado')
.config(function($locationProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .state('password-request', {
        url: '/password/reset',
        templateUrl: 'views/password_reset.html',
        controller: 'ResetPasswordController'
      })
      .state('password-confirm', {
        url: '/password/confirm',
        templateUrl: 'views/password_confirm.html',
        controller: 'ConfirmPasswordController'
      })
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state('dashboard.main', {
        url: '/',
        templateUrl: 'views/dashboard/main.html',
        controller: 'DashboardController'
      });

      $locationProvider.html5Mode(true);
  });
