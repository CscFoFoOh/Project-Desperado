angular
.module('projectDesperado')
.controller('AdminUserController', function($scope, authUser, $state, $stateParams, UserFactory, $rootScope, $window) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user_slug = $stateParams.slug;

  UserFactory
    .getUser($scope.user_slug)
    .then(function(res) {
      $scope.user = res.data.data;
    });

  $scope.deleteUser = function() {
    var confirm = $window.confirm('Are you sure you want to delete this user?  This cannot be undone.');

    if (confirm) {
      UserFactory
        .deleteUser($scope.user_slug)
        .then(function(res) {
          $rootScope.$broadcast('pd:user-deleted');
          $state.go('admin.admin-users');
        });
    }
  };

  });
