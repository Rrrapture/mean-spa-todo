// */app/routes/_todo.router.js*

// ## Todo API Router

// uses Mongoose functions http://mongoosejs.com/docs/api.html

// HTTP Verb | Route | Description
// GET      /api/todo           Get all of the todo items
// POST     /api/todo           Create a single todo item
// DELETE   /api/todo/:todo_id  Delete a single todo item

import Todo from '../models/todo.model.js';

export default (app, router) => {
    router.route('/todo')

        // Access at POST http://localhost.yourport/api/todo
        .post((req, res) => {
            Todo.create({
                text : req.body.text
            }, (err, todo) => {
                if (err)
                    res.send(err);

                console.log(`Todo created: ${todo}`);

                Todo.find((err, todos) => {
                    if(err)
                        res.send(err);

                    res.json(todos);
                });
            });
        })

        // Access at GET http://localhost:yourport/api/todo
        .get((req, res) => {
            Todo.find((err, todo) => {
                if(err)
                    res.send(err);
                else
                    res.json(todo);
            });
        })

        // Access at DELETE http://localhost:yourport/api/todo/:todo_id
        .delete((req, res) => {
            console.log(`Attempting to delete todo with id: ${req.params.todo_id}`);

            Todo.remove({
                _id: req.params.todo_id
            }, (err, todo) => {

                if(err)
                    res.send(err);

                console.log('Todo successfully deleted!');

                Todo.find((err, todos) => {
                    if(err)
                        res.send(err);

                    res.json(todos);
                });
            });
        });
};
