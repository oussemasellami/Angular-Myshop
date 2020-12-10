import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;
  @Output() eventProduct = new EventEmitter<Product>();
  constructor() { }


  ngOnInit(): void {
    this.product = new Product();
  }
  saveNotification(){
    console.log(this.product);
    this.product.like = 0;
    console.log(this.product);
    this.eventProduct.emit(this.product);
  }

}
