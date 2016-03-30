import {Injectable} from 'angular2/core';
import {HmrState} from 'angular2-hmr';

// This serves as an alternative to using the `redux` store and methods
@Injectable()
export class AppState {

  @HmrState() _state = {}; // you must set the initial value
    constructor() {
  }

  get(prop?: any) {

    return this._state[prop] || this._state;
  }

  set(prop: string, value: any) {

    return this._state[prop] = value;
  }
}
