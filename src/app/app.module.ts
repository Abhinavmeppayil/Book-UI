import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProductsModule } from './products/products.module';
import { BooksellComponent } from './booksell/booksell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { RegComponent } from './reg/reg.component';
import { MbooksComponent } from './mbooks/mbooks.component';
import { ViewcComponent } from './viewc/viewc.component';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
    BooksellComponent,
         LogComponent,
         RegComponent,
         MbooksComponent,
         ViewcComponent,
         BuyComponent,
         OrdersComponent,
    
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ReactiveFormsModule,
    FormsModule,ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
