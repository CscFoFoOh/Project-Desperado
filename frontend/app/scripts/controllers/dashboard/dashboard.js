angular
.module('projectDesperado')
.controller('DashboardController', function($scope, $log, ProjectFactory) {

    $scope.projects = [];

    ProjectFactory
      .getMyProjects()
      .then(function(res) {
        $scope.projects = res.data.data;
      });

});
