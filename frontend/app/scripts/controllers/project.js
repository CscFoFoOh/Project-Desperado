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

    $scope.deleteProject = function() {
      var confirm = $window.confirm('Are you sure you want to delete this project?  This cannot be undone.');

      if (confirm) {
        ProjectFactory
          .deleteProject($scope.project_id)
          .then(function(res) {
            $rootScope.$broadcast('pd:project-deleted');
            $state.go('dashboard.main');
          });
      }
    };

  });
