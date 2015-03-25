angular
.module('projectDesperado')
.controller('EditProjectController', function($scope, $state, $stateParams, $rootScope, ProjectFactory, $log) {

    $scope.project = {};
    $scope.project_id = $stateParams.id;

    ProjectFactory
      .getProject($scope.project_id)
      .then(function(res) {
        $scope.project = res.data.data;
      });

    $scope.updateProject = function() {
      ProjectFactory
        .updateProject($scope.project_id, $scope.project)
        .then(function(res) {
          $rootScope.$broadcast('pd:project-updated');
          $state.go('dashboard.single-project', { id: $scope.project_id });
        }, function(res) {
          $log.log(res);
        });
    };

  });
