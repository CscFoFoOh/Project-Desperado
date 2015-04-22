angular
  .module('projectDesperado')
  .controller('UsersController', function($scope, UserFactory) {

    $scope.users = [];

    UserFactory
      .getUsers()
      .then(function(res) {
        $scope.users = res.data.data;
      });

  });
