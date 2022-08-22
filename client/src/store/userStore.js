import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }
  setIsAuth(val) {
    this._isAuth = val;
  }
  setUser(val) {
    this._user = val;
  }
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
