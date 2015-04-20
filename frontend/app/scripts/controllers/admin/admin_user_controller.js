angular
.module('projectDesperado')
.controller('AdminUserController', function($scope, authUser, $state, $stateParams, UserFactory) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user_id = $stateParams.id;

  UserFactory
    .getUser($scope.user_id)
    .then(function(res) {
      $scope.user = res.data.data;
    });

  });
