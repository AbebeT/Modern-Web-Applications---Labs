angular.module("meanGames").controller("GameController", GameController);

function GameController(GamesFactory, $routeParams, $window, $route) {
  const vm = this;
  const id = $routeParams.gameId;
  GamesFactory.getOneGame(id).then(function (response) {
    vm.game = response;
  });

  vm.deleteGame = function () {
    console.log("delete Game function");
    GamesFactory.deleteOne(id).then(function (response) {
      vm.message = "";
      console.log("game deleted");

      if (!response.status) {
        $window.location.href = "#!/games";
      }
    });
  };
  vm.updateGame = function () {
    console.log("Game controller  update inside");
    const newGame = {
      title: vm.gameTitle,
      price: vm.gamePrice,
      minPlayers: vm.gameMinPlayers,
      maxPlayers: vm.gameMaxPlayers
    };

    GamesFactory.updateOne(id, newGame).then(function (response) {
      console.log("Game updated");
      $route.reload();
    });
  };
}
