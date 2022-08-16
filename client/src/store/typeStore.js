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
  }

  setTypes(types) {
    this._types = types;
  }

  get types() {
    return this._types;
  }
}
