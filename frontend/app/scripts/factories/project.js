angular
.module('projectDesperado')
.factory('ProjectFactory', function($http) {

    var endpoint = '/api/projects';
    var factory = {};

    factory.getProjects = function() {
      return $http.get(endpoint);
    };

    return factory;
  });
