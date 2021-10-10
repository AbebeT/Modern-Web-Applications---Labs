angular.module("musicGenres", ["ngRoute"]).config(config)

function config($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "angularjs-app/main/main.html",
        
    }).when("/music", {
        templateUrl : "angularjs-app/music-list/musics.html",
        controller: "MusicsController",
        controllerAs: "vm"
    }).when("/music/:musicId", {
        templateUrl : "angularjs-app/music-one/music.html",
        controller: "MusicController",
        controllerAs: "vm"
    }).otherwise({
        redirectTo: "/"
    })
}