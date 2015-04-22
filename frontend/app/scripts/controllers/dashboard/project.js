angular
.module('projectDesperado')
.controller('DashboardProjectController', function($scope, $window, $state, $stateParams, $rootScope, ProjectFactory, $log) {

    $scope.project = {};
    $scope.new_user = {};
    $scope.project_users = [];
    $scope.project_id = $stateParams.id;

    ProjectFactory
      .getProject($scope.project_id)
      .then(function(res) {
        $scope.project = res.data.data;
      });

    ProjectFactory
      .getProjectUsers($scope.project_id)
      .then(function(res) {
        $scope.project_users = res.data.data;
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

    $scope.inviteUser = function() {
      ProjectFactory
        .inviteUser($scope.project_id, $scope.new_user)
        .then(function(res) {
          $log.log(res);
          $rootScope.$broadcast('pd:user-invited');
          $scope.new_user = {};
        });
    };

  });
