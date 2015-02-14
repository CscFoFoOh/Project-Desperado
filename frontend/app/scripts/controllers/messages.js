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

  $scope.$on('auth:registration-email-success', function(ev, data) {
    $scope.message = 'A confirmation email has been sent. Click the link to activate your account!';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  function clearMessage() {
    $timeout(function() {
      $scope.message = '';
      $scope.classType = '';
    }, 3000);
  }

});
