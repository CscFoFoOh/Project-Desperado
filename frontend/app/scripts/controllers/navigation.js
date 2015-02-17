'use strict';

angular
.module('projectDesperado')
.controller('NavigationController', function($scope, $auth, $state) {

  $scope.loggedIn = false;

  function setLoggedIn() {
    $scope.loggedIn = true;
  }

  function setLoggedOut() {
    $scope.loggedIn = false;
  }

  $scope.logout = function() {
    $auth.signOut()
      .then(function() {
        $state.go('home');
      });
  }

  $scope.$on('auth:login-success', setLoggedIn);
  $scope.$on('auth:validation-success', setLoggedIn);
  $scope.$on('auth:email-confirmation-success', setLoggedIn);
  $scope.$on('auth:logout-success', setLoggedOut);

});
