'use strict';

angular
.module('projectDesperado')
.controller('ResetPasswordController', function($scope, $auth, $state) {

  $scope.user = {};

  $scope.resetPassword = function() {
    $auth.requestPasswordReset($scope.user)
      .then(function(res) {
        $state.go('home');
      });
  };

});
