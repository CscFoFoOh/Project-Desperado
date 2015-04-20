angular
.module('projectDesperado')
.controller('AdminEditUserController', function($scope, authUser, $state, UserFactory, $stateParams, $rootScope) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user_id = $stateParams.id;

  UserFactory
    .getUser($scope.user_id)
    .then(function(res) {
      $scope.user = res.data.data;
    });

  $scope.updateUser = function() {
      UserFactory
        .updateUser($scope.user_id, $scope.user)
        .then(function(res) {
          $rootScope.$broadcast('pd:user-updated');
          $state.go('admin.single-user', { id: $scope.user_id });
        }, function(res) {
          $log.log(res);
        });
    };

  });
