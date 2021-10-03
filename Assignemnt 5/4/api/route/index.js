const express = require("express");
const router = express.Router();
const controller = require("../../controller/games.controller");
const publisherController = require("../../controller/publisher.controller");


router.route("/games")
        .get(controller.getAllGames)
        .post(controller.addGame)
        .put(controller.updateGame);


router.route("/games/:gameId")
        .get(controller.getOneGame)
        .delete(controller.deleteGame);

router.route("/games/:gameId/publisher")
        .get(publisherController.publisherGetAll)
        .delete(publisherController.deletePublisher)
        .put(publisherController.publisherUpdate)
        .post(publisherController.publisherAdd)


module.exports = router;
        