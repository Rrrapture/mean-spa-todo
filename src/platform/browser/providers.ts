//# Global Providers
//
//** These `providers` are available in any template **

import {provide} from 'angular2/core';

// Angular 2
import {FORM_PROVIDERS} from 'angular2/common';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

// Angular 2 Http
import {HTTP_PROVIDERS} from 'angular2/http';
// Angular 2 Router
import {ROUTER_PROVIDERS} from 'angular2/router';

// Angular 2 Material 2
//
// TODO:(datatypevoid): replace with @angular2-material/all
import {MATERIAL_PROVIDERS} from './angular2-material2'

//# Application Providers/Directives/Pipes
//
//** providers/directives/pipes that only live in our browser environment **
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
