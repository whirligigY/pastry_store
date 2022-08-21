import { makeAutoObservable } from 'mobx';

export default class TypeStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: 'Fridge',
      },
      {
        id: 2,
        name: 'Owen',
      },
      {
        id: 3,
        name: 'Kiten',
      },
    ];
    this._selected = 1;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  get types() {
    return this._types;
  }
  setSelected(id) {
    this._selected = id;
  }

  get selected() {
    return this._selected;
  }
}
