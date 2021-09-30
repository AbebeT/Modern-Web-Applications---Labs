const express = require("express");
const router = express.Router();
const controller = require("../../controller/controller.multiply")


router.route("/multiply/:number1")
        .get(controller.multiply);


module.exports = router;