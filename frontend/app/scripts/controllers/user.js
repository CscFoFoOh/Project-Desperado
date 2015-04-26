angular
  .module('projectDesperado')
  .controller('UserController', function($scope, UserFactory, ProjectFactory, $stateParams, $log) {

    $scope.user = {};
    $scope.user_slug = $stateParams.slug;
    $scope.projects = [];

    ProjectFactory
      .getUserProjects($scope.user_slug)
      .then(function(res) {
        $scope.projects = res.data.data;
      });

    UserFactory
      .getUser($scope.user_slug)
      .then(function(res) {
        $log.log(res);
        $scope.user = res.data.data;
      });
  });
