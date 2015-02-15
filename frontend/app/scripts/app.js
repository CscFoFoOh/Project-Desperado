'use strict';

angular
.module('projectDesperado', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ipCookie',
    'ng-token-auth',
    'ui.router'
  ])
.run(function($rootScope, $state, $log) {
  $rootScope.$on('auth:email-confirmation-success', function(ev, user) {
    $state.go('dashboard');
    $log.log('Email confirmation was success.');
  });
});

