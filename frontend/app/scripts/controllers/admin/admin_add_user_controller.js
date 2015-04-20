angular
.module('projectDesperado')
.controller('AdminAddUserController', function($scope, authUser, $state, UserFactory, $rootScope, $log) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user = { provider: 'email' };

  $scope.addUser = function() {
      UserFactory
        .createUser($scope.user)
        .then(function(res) {
          $log.log(res);
          $rootScope.$broadcast('pd:user-created');
          $state.go('admin.single-user', { id: res.data.id });
        }, function(res) {
          $log.log(res);
        });
    };

  });
