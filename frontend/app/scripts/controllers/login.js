'use strict';

angular.module('projectDesperado')
  .controller('LoginController', function($scope, $auth, $state) {
    $scope.user = {};

    $scope.login = function() {
      $auth.submitLogin($scope.user)
        .then(function(resp) {
          $state.go('dashboard');
        });
    }

  });
