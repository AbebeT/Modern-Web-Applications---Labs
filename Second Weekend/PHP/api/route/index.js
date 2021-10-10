const express = require("express");
const router = express.Router();
const controller = require("../../controller/music.controller")
const artistsController = require("../../controller/artists.controller")
const controllerUsers = require("../../controller/users.controller")


router.route("/music")
        .get(controller.getAllMusic)
        .post(controller.addMusic);



router.route("/music/:musicId")
        .get(controller.getOneMusic)
        .delete(controller.deleteMusic)
        .put(controller.updateMusic);

router.route("/music/:musicId/artists")
        .get(artistsController.musicGetAll)
        .post(artistsController.addArtist)

router.route("/music/:musicId/artists/:artistId")
                .get(artistsController.getMusicArtistById)
                .delete(artistsController.deleteArtist)
                .put(artistsController.updateArtist)


router.route("/users/register")
        .post(controllerUsers.register);
router.route("/users/login").post(controllerUsers.login)


module.exports = router;
        