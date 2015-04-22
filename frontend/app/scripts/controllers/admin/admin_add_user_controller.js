angular
.module('projectDesperado')
.controller('AdminAddUserController', function($scope, authUser, $state, UserFactory, $rootScope) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user = { provider: 'email' };

  $scope.addUser = function() {
      UserFactory
        .createUser($scope.user)
        .then(function(res) {
          $rootScope.$broadcast('pd:user-created');
          $state.go('admin.single-user', { slug: res.data.slug });
        });
    };

  });
