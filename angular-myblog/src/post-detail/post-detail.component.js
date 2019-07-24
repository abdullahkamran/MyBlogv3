'use strict';

// Register `postDetail` component, along with its associated controller and template
angular.
  module('postDetail').
  component('postDetail', {
    templateUrl: 'src/post-detail/post-detail.template.html',
    controller: ['$routeParams', 'Post', 'Comment',
      function PostDetailController($routeParams, Post, Comment) {
        var self = this;
        self.post = Post.get({postId: $routeParams.postId})
        self.comments = Comment.query({postId: $routeParams.postId})

      }
    ]
  });
