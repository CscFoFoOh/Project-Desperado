'use strict';

angular
.module('projectDesperado')
.controller('MessagesController', function($scope, $timeout, $log) {
  $scope.message = '';
  $scope.classType = '';

  $scope.$on('auth:registration-email-error', function(ev, res) {
      $scope.message = res.errors.full_messages[0];
      $scope.classType = 'alert-danger';
      clearMessage();
  });

  $scope.$on('auth:registration-email-success', function(ev, res) {
    $scope.message = 'A confirmation email has been sent. Click the link to activate your account!';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:email-confirmation-success', function(ev, res) {
    $scope.message = 'You have completed registration. Yay!';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:login-error', function(ev, res) {
    $scope.message = 'That username/password combination is incorrect.';
    $scope.classType = 'alert-danger';
    clearMessage();
  });

  $scope.$on('auth:password-reset-request-success', function(ev, res) {
    $scope.message = 'Password reset instructions have been sent to your email.';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:password-reset-request-error', function(ev, res) {
    $scope.message = res.errors[0];
    $scope.classType = 'alert-danger';
    clearMessage();
  });

  $scope.$on('auth:password-change-success', function(ev, res) {
    $scope.message = res.data.message;
    $scope.classType = 'alert-success';
    clearMessage();
  });

    $scope.$on('auth:account-update-success', function(ev, res) {
      $scope.message = "You're account has been updated!";
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
