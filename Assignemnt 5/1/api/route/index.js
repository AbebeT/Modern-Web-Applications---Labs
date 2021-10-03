const express = require("express");
const router = express.Router();
const controller = require("../../controller/games.controller")


router.route("/games")
        .get(controller.getAllGames);


router.route("/games/:gameId")
        .get(controller.getOneGame);


module.exports = router;
        