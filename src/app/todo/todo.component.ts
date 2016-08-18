import {Component} from '@angular/core';//remove View since not needed
import {TodoService} from './todo.service';

// we import `import` `http` into our `TodoService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from '@angular/http';
// NgFor directive
import {NgFor} from '@angular/common';

// Create metadata with the `@Component` decorator
@Component({
    selector: 'todo',
    providers: [...HTTP_PROVIDERS, TodoService],
    template: require('./todo.html')
})

export class Todo {
    private todos: Array<Todo> = [];
    // set default values
    //todos = [];
    // Initialize our `todoData.text` to an empty `string`
    todoData = {
        text: ''
    };

    constructor(public todoService:TodoService) {
        console.log('Todo constructor go!');

        //this.todos = [];
        todoService.getAll()
            // `Rxjs`; we subscribe to the response
            .subscribe((res) => {
                // Populate `todo` array with `response` data
                this.todos = res;
                // Reset `todo` input
                this.todoData.text = '';
            })
    }

    createTodo() {
        this.todoService.createTodo(this.todoData)
            .subscribe((res) => {
                this.todos = res;
                this.todoData.text = '';
            })
    }

    deleteTodo(id) {
        this.todoService.deleteTodo(id)
            .subscribe((res) => {
                this.todos = res;
            })
    }
}
