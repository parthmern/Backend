const TodoService = require("../services/todo.service");
const TodoRepository = require("../repositories/todo.repository");

const todoRepo = new TodoRepository();
const todoService = new TodoService(todoRepo);


async function getTodos(req, res) {

    const response = await todoService.getAllTodos();

    return res.json({
        data: response
    })
} 

async function createTodo(req, res) {
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({
        data: 'New todo created'
    })
} 


module.exports = {
    getTodos,
    createTodo
}