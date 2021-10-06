angular.module("myPropperApp").controller("PostsController", PostsController)

function PostsController(PostFactory) {
    const vm = this
    console.log("before get posts");
    PostFactory.getAllPosts().then(function (response) {
        vm.posts = response;
    })
}