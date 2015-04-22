angular
.module('projectDesperado')
.factory('UserFactory', function($http) {

    var endpoint = '/users';
    var factory = {};

    factory.getUsers = function() {
      return $http.get('/api' + endpoint);
    };

    factory.createUser = function(attrs) {
      return $http.post('/api' + endpoint, attrs);
    };

    factory.getUser = function(id) {
      return $http.get('/api' + endpoint + '/' + id);
    };

    factory.updateUser = function(id, attrs) {
      return $http.put('/api' + endpoint + '/' + id, attrs);
    };

    factory.deleteUser = function(id) {
      return $http.delete('/api' + endpoint + '/' + id);
    };

    return factory;
  });
