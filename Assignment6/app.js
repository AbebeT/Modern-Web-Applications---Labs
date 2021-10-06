angular.module("myPropperApp", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "main/main.html",
      controller: "MainController",
      controllerAs: "mainCtrl",
    })
    .when("/about", {
      templateUrl: "./about/about.html",
      controller: "AboutController",
      controllerAs: "aboutCtrl",
    })
    .when("/albums", {
      templateUrl: "./albums/albums.html",
      controller: "AlbumsController",
      controllerAs: "albumsCtrl",
    })
    .when("/albums/:albumId", {
      templateUrl: "./album/album.html",
      controller: "AlbumController",
      controllerAs: "albumCtrl",
    })
    .otherwise({
      redirectTo: "/",
    });
}
