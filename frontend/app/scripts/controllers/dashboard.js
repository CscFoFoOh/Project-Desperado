angular
.module('projectDesperado')
.controller('DashboardController', function($scope, $log, ProjectFactory) {

    $scope.projects = [];

    ProjectFactory
      .getProjects()
      .then(function(res) {
        $scope.projects = res.data.data;
      });

});
