const express = require("express");
const { getTodos, createTodo } = require("../../controller/todo.controller");
const { createTodoValidator } = require("../../validators/todo.validator");


const router = express.Router();

router.get("/getTodos", getTodos);
router.post("/createTodo", createTodoValidator ,createTodo);

module.exports = router ;