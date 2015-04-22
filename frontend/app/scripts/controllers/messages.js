'use strict';

angular
.module('projectDesperado')
.controller('MessagesController', function($scope, $timeout) {
  $scope.message = '';
  $scope.classType = '';

  $scope.$on('auth:registration-email-error', function(ev, res) {
      $scope.message = res.errors.full_messages[0];
      $scope.classType = 'alert-danger';
      clearMessage();
  });

  $scope.$on('auth:registration-email-success', function() {
    $scope.message = 'A confirmation email has been sent. Click the link to activate your account!';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:email-confirmation-success', function() {
    $scope.message = 'You have completed registration. Yay!';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:login-error', function() {
    $scope.message = 'That username/password combination is incorrect.';
    $scope.classType = 'alert-danger';
    clearMessage();
  });

  $scope.$on('auth:password-reset-request-success', function() {
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

  $scope.$on('auth:account-update-success', function() {
    $scope.message = "You're account has been updated!";
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('auth:account-destroy-success', function() {
    $scope.message = 'Your account has been deleted.  We are sorry to see you go.';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('pd:project-deleted', function() {
    $scope.message = 'Your project has been deleted.';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('pd:user-added', function() {
    $scope.message = 'The user has been added to the project.';
    $scope.classType = 'alert-success';
    clearMessage();
  });

  $scope.$on('pd:user-removed', function() {
    $scope.message = 'The user has been removed from the project.';
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
