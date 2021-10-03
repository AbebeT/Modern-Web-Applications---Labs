const express = require("express");
const router = express.Router();
const controller = require("../../controller/music.controller")
const artistsController = require("../../controller/artists.controller")


router.route("/music")
        .get(controller.getAllMusic)
        .post(controller.addMusic);



router.route("/music/:musicId")
        .get(controller.getOneMusic)
        .delete(controller.deleteMusic)
        .put(controller.updateMusic);

router.route("/music/:musicId/artists")
        .get(artistsController.musicGetAll);

router.route("/music/:musicId/artists/:artistName")
                .get(artistsController.getMusicArtistById);


module.exports = router;
        