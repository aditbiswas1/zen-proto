'use strict';

angular.module('testAppApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
