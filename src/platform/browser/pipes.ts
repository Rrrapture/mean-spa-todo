//# Global Pipes
//
//** These `pipes` are available in any template **

import {provide, PLATFORM_PIPES} from 'angular2/core';

//# APPLICATION_PIPES
//
//** Pipes that are global throughout our application **
export const APPLICATION_PIPES = [

];

export const PIPES = [
  provide(PLATFORM_PIPES, { useValue: APPLICATION_PIPES, multi: true })
];
