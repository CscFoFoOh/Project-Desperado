angular
.module('projectDesperado')
.controller('ProjectController', function($scope, $stateParams, ProjectFactory) {

    $scope.project = {};

    ProjectFactory
      .getProject($stateParams.id)
      .then(function(res) {
        $scope.project = res.data.data;
      });

  });
