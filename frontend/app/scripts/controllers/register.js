'use strict';

angular.module('projectDesperado')
  .controller('RegisterController', function ($scope, $auth, $log) {
    $scope.user = {};

    $scope.save = function() {
      $auth.submitRegistration($scope.user)
        .then(function(resp) {
          $log.log('Passed');
          $log.log(resp);
        }, function(resp) {
          $log.log('Failed');
          $log.log(resp);
        });
    };
  });
