// OOP in js
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
// https://chatgpt.com/share/66eae667-549c-8010-b8fb-51cc30f95bf9

class TodoService {

    constructor(todoRepository) {
        this.todoRepository = todoRepository;   // Properties
    }

    create(todoText) {
        // an BusinessLogic u want to exec
        if(todoText.length == 0) return;
        todoText = todoText.trim().toUpperCase();

        // call repositories
        this.todoRepository.insert(todoText);
        
    }

    getOneTodo(id) {
        return this.todoRepository.get(id);
    }

    getAllTodos() {
        console.log("getting all todos...");
        return this.todoRepository.getAll();
    }
    
}

module.exports = TodoService;