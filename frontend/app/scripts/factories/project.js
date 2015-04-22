angular
.module('projectDesperado')
.factory('ProjectFactory', function($http) {

    var endpoint = '/projects';
    var factory = {};

    factory.getProjects = function() {
      return $http.get('/api' + endpoint);
    };

    factory.getUserProjects = function() {
      return $http.get('/api/me/projects');
    };

    factory.createProject = function(attrs) {
      return $http.post('/api/' + endpoint, attrs);
    };

    factory.getProject = function(id) {
      return $http.get('/api/' + endpoint + '/' + id);
    };

    factory.updateProject = function(id, attrs) {
      return $http.put('/api' + endpoint + '/' + id, attrs);
    };

    factory.deleteProject = function(id) {
      return $http.delete('/api/' + endpoint + '/' + id);
    };

    factory.getProjectUsers = function(id) {
      return $http.get('/api' + endpoint + '/' + id + '/users');
    };

    factory.addUser = function(id, attrs) {
      return $http.post('/api' + endpoint + '/' + id + '/users', attrs);
    };

    factory.removeUser = function(project_id, user_id) {
      return $http.delete('/api' + endpoint + '/' + project_id + '/users/' + user_id);
    };

    factory.applyUser = function(id, attrs) {
      return $http.post('/api' + endpoint + '/' + id + '/applications', attrs);
    };

    return factory;
  });
