angular
  .module('projectDesperado')
  .controller('ProjectsController', function($scope, $log, ProjectFactory) {

    $scope.projects = [];

    ProjectFactory
      .getProjects()
      .then(function(res) {
        $scope.projects = res.data.data;
      });

  });
