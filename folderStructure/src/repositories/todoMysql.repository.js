class TodoMySQLRepository {
    // below code will not work it is for demo
    insert(todoText) {
        mysql.exec(`INSERT INTO TODOS (todoText) VALUES (${todoText})`)
    }

    getAll() {
        mysql.exec(`SELECT * FROM TODOS;`)
    }

    get(id) {
        mysql.exec(`SELECT * FROM TODOS WHERE id = ${id};`)
    }

}


module.exports = TodoMySQLRepository;