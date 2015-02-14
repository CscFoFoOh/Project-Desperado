'use strict';

angular.module('projectDesperado')
  .controller('RegisterController', function ($scope, $auth, $state) {
    $scope.user = {};

    $scope.save = function() {
      $auth.submitRegistration($scope.user)
        .then(function(resp) {
          $state.go('home');
        });
    };
  });
