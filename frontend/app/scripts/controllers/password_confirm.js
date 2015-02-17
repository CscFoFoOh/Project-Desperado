angular
.module('projectDesperado')
.controller('ConfirmPasswordController', function($scope, $auth, $state) {

  $scope.user = {};

  $scope.confirmPassword = function() {
    $auth.updatePassword($scope.user)
      .then(function(res) {
        $state.go('dashboard');
      });
  };

});
