const express = require("express");
const router = express.Router();
const controller = require("../../controller/games.controller")


router.route("/games")
        .get(controller.getAllGames)
        .post(controller.addGame)
        .put(controller.updateGame);


router.route("/games/:gameId")
        .get(controller.getOneGame)
        .delete(controller.deleteGame)
        .put(controller.updateGame);


module.exports = router;
        