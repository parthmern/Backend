const express = require("express");
const { getTodos } = require("../../controller/todo.controller");


const router = express.Router();

router.get("/getTodos", getTodos);

module.exports = router ;