angular
.module('projectDesperado')
.factory('ProjectFactory', function($http) {

    var endpoint = '/api/projects';
    var factory = {};

    factory.getProjects = function() {
      return $http.get(endpoint);
    };

    factory.getProject = function(id) {
      return $http.get(endpoint + '/' + id);
    };

    factory.deleteProject = function(id) {
      return $http.delete(endpoint + '/' + id);
    };

    return factory;
  });