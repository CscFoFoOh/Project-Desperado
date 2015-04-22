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

    $scope.addUser = function() {
      ProjectFactory
        .addUser($scope.project_id, $scope.new_user)
        .then(function(res) {
          $log.log(res);
          $rootScope.$broadcast('pd:user-added');
          $scope.new_user = {};
          $scope.project_users.push(res.data.user);
        });
    };

    $scope.removeUser = function(user_id) {
      ProjectFactory
        .removeUser($scope.project_id, user_id)
        .then(function(res) {
          $log.log(res);
          $rootScope.$broadcast('pd:user-removed');
          for (i = 0; i < $scope.project_users.length; i++) {
            temp = $scope.project_users[i];
            if (temp.id === user_id) {
              $scope.project_users.splice(i, 1);
            }
          }
        });
    }

  });
