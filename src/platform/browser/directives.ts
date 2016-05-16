//# Global Directives
//
//** These `directives` are available in any template **

import {provide, PLATFORM_DIRECTIVES} from 'angular2/core';

// Angular 2 Router
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Angular 2 Material 2
//
// TODO(datatypevoid): replace with @angular2-material/all
// import {MATERIAL_DIRECTIVES} from ./angular2-material2

// APPLICATION_DIRECTIVES
//
// directives that are global through out the application
export const APPLICATION_DIRECTIVES = [

  ...ROUTER_DIRECTIVES,
  // TODO(datatypevoid): uncomment when material is fixed
  //...MATERIAL_DIRECTIVES
];

export const DIRECTIVES = [

  provide(PLATFORM_DIRECTIVES, {useValue: APPLICATION_DIRECTIVES, multi: true})
];
