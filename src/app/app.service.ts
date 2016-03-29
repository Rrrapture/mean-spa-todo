import {Injectable} from 'angular2/core';
import {WebpackState} from 'angular2-hmr';

// This serves as an alternative to using the `redux` store and methods
@Injectable()
export class AppState {

  // NOTE: You must set the initial value
  _state = {};

  constructor(webpackState: WebpackState) {

    this._state = webpackState.select('AppState', () => this._state);
  }

  get(prop?: any) {

    return this._state[prop] || this._state;
  }

  set(prop: string, value: any) {

    return this._state[prop] = value;
  }
}
