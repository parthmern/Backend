const express = require("express");
const { getTodos, createTodo } = require("../../controller/todo.controller");


const router = express.Router();

router.get("/getTodos", getTodos);
router.post("/createTodo", createTodo);

module.exports = router ;