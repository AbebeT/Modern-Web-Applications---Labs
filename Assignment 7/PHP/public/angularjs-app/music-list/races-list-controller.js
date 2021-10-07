angular.module("musicGenres").controller("MusicsController", MusicsController);

function MusicsController($http) {
  const vm = this;
  vm.title = "Tokyo 2020 Olympics Musics";
  vm.musics = $http.get("/api/musics").then(function (response) {
    vm.musics = response.data;
  });
}
