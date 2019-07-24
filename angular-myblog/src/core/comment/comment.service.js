'use strict';

angular.
  module('core.comment').
  factory('Comment', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000/comments?postId=:postId', {}, {
        query: {
          method: 'GET',
          params: {postId: '1'},
          isArray: true
        }
      });
    }
  ]);
