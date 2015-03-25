angular
.module('projectDesperado')
.controller('ProjectController', function($scope, $window, $state, $stateParams, $rootScope, ProjectFactory) {

    $scope.project = {};
    $scope.project_id = $stateParams.id;

    ProjectFactory
      .getProject($scope.project_id)
      .then(function(res) {
        $scope.project = res.data.data;
      });

  });
