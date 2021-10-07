angular.module("olympicMusics").controller("RaceController", RaceController);

function RaceController(MusicsFactory, $routeParams) {
  const vm = this;
  const id = $routeParams.musicId;
  MusicsFactory.getOneRace(id).then(function (response) {
    vm.music = response;
  });
}
