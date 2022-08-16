export default class BrandStore {
  constructor() {
    this._brands = [
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

  setBrands(brands) {
    this._brands = brands;
  }

  get brands() {
    return this._brands;
  }
}
