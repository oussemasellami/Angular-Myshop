import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  idProduct: number;
  title: string;

  listProdcut: Product[];
 //
  constructor(private serviceRoute: ActivatedRoute, private serviceProduct: ProductService) {
  }

  ngOnInit(): void {
    console.log(this.serviceRoute.snapshot.params.productId);
    console.log(this.serviceRoute);
    console.log(this.serviceRoute.snapshot.params.id);
    this.idProduct = this.serviceRoute.snapshot.params.productId;
    this.listProdcut = this.serviceProduct.getProductsList();

    console.log(this.listProdcut);
  }



}
