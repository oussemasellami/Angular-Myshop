import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormProductComponent } from './form-product/form-product.component';
import { AppRoutingModule} from './app-routing.module';
import { DetailProductComponent } from './detail-product/detail-product.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductComponent,
    TodoComponent,
    ListTodoComponent,
    FormProductComponent,
    DetailProductComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
