const express = require("express");
const router = express.Router();
const controller = require("../controller/games.controller")
router.route("/games")
  .get(controller.gamesGetAll);
  
module.exports = router;
