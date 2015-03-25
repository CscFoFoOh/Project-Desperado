angular
.module('projectDesperado')
.controller('AddProjectController', function($scope, $state, $rootScope, ProjectFactory, $log) {

    $scope.project = {};

    $scope.createProject = function() {
      ProjectFactory
        .createProject($scope.project)
        .then(function(res) {
          $rootScope.$broadcast('pd:project-created');
          $state.go('dashboard.single-project', { id: res.data.id });
        }, function(res) {
          $log.log(res);
        });
    };

  });
