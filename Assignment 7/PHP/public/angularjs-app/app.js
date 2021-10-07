angular.module("olympicMusics", ["ngRoute"]).config(config);

function config($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "angularjs-app/main/welcome.html",
    })
    .when("/musics", {
      templateUrl: "angularjs-app/music-list/musics.html",
      controller: "MusicsController",
      controllerAs: "vm",
    })
    .when("/musics/:musicId", {
      templateUrl: "angularjs-app/music-one/music.html",
      controller: "RaceController",
      controllerAs: "vm",
    })
    .otherwise({
      redirectTo: "/",
    });
}
