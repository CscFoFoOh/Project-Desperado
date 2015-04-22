angular
  .module('projectDesperado')
  .controller('UserController', function($scope, UserFactory, $stateParams, $log) {

    $scope.user = {};
    $scope.user_slug = $stateParams.slug;

    UserFactory
      .getUser($scope.user_slug)
      .then(function(res) {
        $log.log(res);
        $scope.user = res.data.data;
      });

  });
