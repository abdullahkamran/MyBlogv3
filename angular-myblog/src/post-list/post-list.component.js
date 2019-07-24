'use strict';

// Register `postList` component, along with its associated controller and template
angular.
  module('postList').
  component('postList', {
    templateUrl: 'src/post-list/post-list.template.html',
    controller: ['Post',
      function PostListController(Post) {

        self=this;
        self.post = {};
        self.posts = Post.query();
        self.orderProp = 'id';

        self.submitForm = function() {
          Post.post({userId: self.post.userId, id: self.post.id, title: self.post.title, body: self.post.body});
        }

      }
    ]
  });
