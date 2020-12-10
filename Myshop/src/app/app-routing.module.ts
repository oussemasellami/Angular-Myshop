import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {FormProductComponent} from './form-product/form-product.component';
import {ListTodoComponent} from './list-todo/list-todo.component';
import {DetailProductComponent} from './detail-product/detail-product.component';
import {FirstComponent} from "./first/first.component";

const ROUTES: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'products', component: HelloComponent},
  {path: 'formProduct', component: FormProductComponent},
  {path: 'todo', component: ListTodoComponent},
  {path: 'products/product/:productId', component: DetailProductComponent},
  {path: '**', component: FirstComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
