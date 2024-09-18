const express = require("express");
const homePingController = require("../../controller/home.controller");

const router = express.Router();

router.get("/ping", homePingController);


module.exports = router ;