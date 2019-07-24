'use strict';

// Register `userDetail` component, along with its associated controller and template
angular.
  module('userDetail').
  component('userDetail', {
    templateUrl: 'src/user-detail/user-detail.template.html',
    controller: ['$routeParams', 'User', 'Post',
      function UserDetailController($routeParams, User, Post) {
        var self = this;
        self.user = User.get({userId: $routeParams.userId})
        self.posts = Post.byUser({userId: $routeParams.userId})

      }
    ]
  });
