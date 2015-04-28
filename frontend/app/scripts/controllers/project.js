angular
.module('projectDesperado')
.controller('ProjectController', function($scope, $window, $stateParams, ProjectFactory, $auth, $rootScope) {

    $scope.project = {};
    $scope.project_id = $stateParams.id;
    $scope.logged_in = false;
    $scope.logged_in_user_id = null;
    $scope.logged_in_user = null;
    $scope.already_applied = false;
    $scope.project_users = [];
    $scope.owner_id = null;

    function validateAlreadyApplied() {
      if ($scope.logged_in && !jQuery.isEmptyObject($scope.project)) {
        if ($scope.project.memberships.indexOf($scope.logged_in_user_id) > -1) {
          $scope.already_applied = true;
        }
      }
    }

    $auth
      .validateUser()
      .then(function(user) {
        $scope.logged_in = true;
        $scope.logged_in_user_id = user.id;
        $scope.logged_in_user = user;
      })
      .then(validateAlreadyApplied);

    ProjectFactory
      .getProject($scope.project_id)
      .then(function(res) {
        $scope.project = res.data.data;
        console.log($scope.project);
        $scope.owner_id = $scope.project.owner_id;
      })
      .then(validateAlreadyApplied);

    ProjectFactory
      .getProjectUsers($scope.project_id)
      .then(function(res) {
        $scope.project_users = res.data.data;
      });

    $scope.applyToProject = function(user_id) {
      ProjectFactory
        .applyUser($scope.project_id, { user_id: user_id })
        .then(function(res) {
          $rootScope.$broadcast('pd:applied-to-project');
          $scope.already_applied = true;
        });
    };

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
    
    $scope.closeProject = function() {
      var confirm = $window.confirm('Are you sure you want to close this project?  This will remove it from the projects list but will still be visible to those on the project.');

      if (confirm) {
        var closed_at = new Date();

        ProjectFactory
          .updateProject($scope.project_id, { closed_at: closed_at })
          .then(function(res) {
            $rootScope.$broadcast('pd:project-updated');
            $scope.project.closed_at = closed_at;
          });
      }
    };


  });
