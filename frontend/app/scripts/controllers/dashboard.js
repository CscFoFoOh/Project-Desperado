angular
.module('projectDesperado')
.controller('DashboardController', function($scope, $log, ProjectFactory) {

    $scope.projects = [];

    ProjectFactory
      .getProjects()
      .then(function(data) {
        $log.log(data);
      });

});
