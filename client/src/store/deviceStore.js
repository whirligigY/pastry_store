import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._devices = [
      {
        id: 1,
        name: 'ite-53',
        price: 250000,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 1,
        brandId: 3,
      },
      {
        id: 2,
        name: 'ite-55',
        price: 250000,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 1,
        brandId: 3,
      },
      {
        id: 3,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 2,
        brandId: 4,
      },
      {
        id: 4,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 2,
        brandId: 4,
      },
      {
        id: 5,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 2,
        brandId: 4,
      },
      {
        id: 6,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 2,
        brandId: 4,
      },
      {
        id: 7,
        name: 'gtr-5558',
        price: 45500,
        raiting: 0,
        img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
        typeId: 2,
        brandId: 4,
      },
    ];
    makeAutoObservable(this);
  }

  get devices() {
    return this._devices;
  }
}
