import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// `Injectable` is often used with `Dart` metatdata generation;
// it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metatdata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/
// resolve-service-dependencies-in-angular-2.html
@Injectable()
export class TodoService {
    // the `public` keyword denotes that the constructor parameter
    // will be reatined as a field
    // Reference: 
    // https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#336-members
    // Add `Http` type annotation to the `http` function argument
    // Type annotations in TypeScript are used to record the intended
    // contract of the function or variable.
    // Reference:
    // https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3-types
    // Here we intend the constructor function to be called with the 
    // `Http` parameter
    constructor(public http:Http) {

    }

    getAll() {
        return this.http.get('/api/todo')
            // map the `HTTP` response from the `raw` to `JSON` format
            // Using `RxJs`
            // Reference: https://github.com/Reactive-Extensions/RxJS
            .map(res => res.json());
    }

    createTodo(data) {
        let headers = new Headers();
        // Set JSON headers so that the body-parser on the back end
        // can parse the data sent
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/todo', JSON.stringify(data),
            {headers:headers})
            .map(res => res.json());
    }

    deleteTodo(id) {
        return this.http.delete(`/api/todo/${id}`)
            .map(res => res.json());
    }
}
