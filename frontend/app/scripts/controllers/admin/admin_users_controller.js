angular
.module('projectDesperado')
.controller('AdminUsersController', function($scope, authUser, $state, UserFactory) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.users = [];

  UserFactory
    .getUsers()
    .then(function(res) {
      $scope.users = res.data.data;
    });

  });
