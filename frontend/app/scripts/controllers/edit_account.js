'use strict';

angular
.module('projectDesperado')
.controller('EditAccountController', function($scope, $auth, $state, authUser) {
    $scope.user = authUser;

    $scope.update = function() {
      $auth.updateAccount($scope.user)
        .then(function() {
          $state.go('dashboard.main');
        });
    };

});
