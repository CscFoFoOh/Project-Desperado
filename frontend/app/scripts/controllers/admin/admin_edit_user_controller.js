angular
.module('projectDesperado')
.controller('AdminEditUserController', function($scope, authUser, $state, UserFactory, $stateParams, $rootScope) {

  if (!authUser.is_admin) {
    $state.go('dashboard.main');
  }

  $scope.user_slug = $stateParams.slug;
  $scope.user = {};

  UserFactory
    .getUser($scope.user_slug)
    .then(function(res) {
      $scope.user = res.data.data;
    });

  $scope.updateUser = function() {
      UserFactory
        .updateUser($scope.user_slug, $scope.user)
        .then(function(res) {
          $rootScope.$broadcast('pd:user-updated');
          $state.go('admin.single-user', { slug: $scope.user_slug });
        }, function(res) {
          $log.log(res);
        });
    };

  });
