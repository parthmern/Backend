const express = require("express");
const homePingController = require("../../controller/home.controller");
const todoRouter = require("../v1/todo.routes");

const router = express.Router();

router.get("/ping", homePingController);

// all routing layers
router.use("/todo", todoRouter);

module.exports = router ;