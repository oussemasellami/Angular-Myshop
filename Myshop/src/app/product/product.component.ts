import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() incrementEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {

  }
  sendNotif(){
    this.incrementEvent.emit(this.product);
  }

}
