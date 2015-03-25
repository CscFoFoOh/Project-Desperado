'use strict';

angular
.module('projectDesperado')
.controller('EditAccountController', function($scope, $auth, $state, $window, authUser) {
    $scope.user = authUser;

    $scope.update = function() {
      $auth.updateAccount($scope.user)
        .then(function() {
          $state.go('dashboard.main');
        });
    };

    $scope.deleteAccount = function() {
      var confirm = $window.confirm('Are you sure you want to delete your account?  This cannot be undone.');

      if (confirm) {
        $auth.destroyAccount()
          .then(function() {
            $state.go('home');
          });
      }
    };

});
