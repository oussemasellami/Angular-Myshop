import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProdcut: Product[];
  constructor() { }
  getProductsList(){
    this.listProdcut = [
      {id: 1, title: 'T-shirt 1', price: 20, quantity: 10, like: 0},
      {id: 2, title: 'T-shirt 2', price: 100, quantity: 0, like: 0},
      {id: 3, title: 'T-shirt 3', price: 34, quantity: 0, like: 0},
    ];
    return this.listProdcut;
  }
}
