export default class DeviceStore {
  constructor() {
    this._devices = [
      {
        id: 1,
        name: 'ite-53',
        price: 250000,
        raiting: 0,
        img: '797a1cc6-e205-40db-a059-616f4e2a3534.jpg',
        typeId: 1,
        brandId: 3,
      },
      {
        id: 2,
        name: 'ite-55',
        price: 250000,
        raiting: 0,
        img: 'bcc867f7-7eaf-49cf-ae70-cb8c5ba25d41.jpg',
        typeId: 1,
        brandId: 3,
      },
      {
        id: 3,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: '4587ec76-1ba5-461e-9956-f842981ab438.jpg',
        typeId: 2,
        brandId: 4,
      },
    ];
  }

  get devices() {
    return this._devices;
  }
}
