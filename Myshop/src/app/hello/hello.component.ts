import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  title: string;
  listProdcut: Product[];
  priceMax: number;
  showForm: boolean;
  n: number;
  constructor(private calcule: CalculService) { }

  ngOnInit(): void {
    this.title = 'E-commerce';
    this.n = 0 ;
    this.listProdcut = [
      {id: 1, title: 'T-shirt 1', price: 20, quantity: 10, like: 0},
      {id: 2, title: 'T-shirt 2', price: 100, quantity: 0, like: 0},
      {id: 3, title: 'T-shirt 3', price: 34, quantity: 0, like: 0},
    ];
    this.showForm = false;
  }
  incrementLike(product: Product){
    let i = this.listProdcut.indexOf(product);
    this.listProdcut[i].like++;
  }
  insert(p: Product){
    this.listProdcut.push(p);
    console.log(this.listProdcut);
    this.showForm = false;
  }
  showFormMethod(){
    if(this.showForm)
    {
    this.showForm = false;
    }else{
      this.showForm = true;
    }
  }

  getStat(){
   this.n = this.calcule.getStat(this.listProdcut, 'quantity', 0);
  }
}
