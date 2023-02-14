import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './head/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MlbooksComponent } from './mlbooks/mlbooks.component';
import { ComboComponent } from './combo/combo.component';
// import { RegisterrComponent } from './registerr/registerr.component'
// import { BooksellComponent } from '../booksell/booksell.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AllBooksComponent,
    CartComponent,
    WishListComponent,
    FilterPipe,
    ViewComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MlbooksComponent,
    ComboComponent,
    // RegisterrComponent,
    // BooksellComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
