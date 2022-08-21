import { makeAutoObservable } from 'mobx';
export default class BrandStore {
  constructor() {
    this._brands = [
      {
        id: 3,
        name: 'LG',
      },
      {
        id: 4,
        name: 'Samsung',
      },
      {
        id: 5,
        name: 'Smeg',
      },
      {
        id: 6,
        name: 'Lenovo',
      },
    ];
    this._selected = 1;
    makeAutoObservable(this);
  }

  setBrands(brands) {
    this._brands = brands;
  }

  get brands() {
    return this._brands;
  }
  setSelected(id) {
    this._selected = id;
  }

  get selected() {
    return this._selected;
  }
}
