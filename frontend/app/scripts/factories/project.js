angular
.module('projectDesperado')
.factory('ProjectFactory', function($http) {

    var endpoint = '/api/projects';
    var factory = {};

    factory.getProjects = function() {
      return $http.get(endpoint);
    };

    factory.createProject = function(attrs) {
      return $http.post(endpoint, attrs);
    };

    factory.getProject = function(id) {
      return $http.get(endpoint + '/' + id);
    };

    factory.updateProject = function(id, attrs) {
      return $http.put(endpoint + '/' + id, attrs);
    };

    factory.deleteProject = function(id) {
      return $http.delete(endpoint + '/' + id);
    };

    return factory;
  });
