// *src/app/app.ts*

// This file contains the main class as well as the necesary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NgFor} from '@angular/common';

import{Todo} from './todo/todo.component';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [],
    directives: [ ...ROUTER_DIRECTIVES,Todo,NgFor ],
    pipes: [],
    styleUrls: [require("!style!css!sass!../sass/main.scss")],
    template: `
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})

@RouteConfig([
    { path: '/', component: Todo, name: 'Index' }
])

export class App {
    constructor() {

    }
}