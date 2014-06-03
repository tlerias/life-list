'use strict';

angular.module('lifelistApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
