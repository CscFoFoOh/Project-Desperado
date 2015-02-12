'use strict';

angular
.module('projectDesperado')
.controller('MessagesController', function($scope, $timeout) {
  $scope.message = '';
  $scope.classType = '';

  $scope.$on('auth:registration-email-error', function(ev, data) {
      $scope.message = data.errors.full_messages[0];
      $scope.classType = 'alert-danger';
      clearMessage();
  });

  function clearMessage() {
    $timeout(function() {
      $scope.message = '';
      $scope.classType = '';
    }, 3000);
  }

});
