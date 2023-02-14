import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksellComponent } from '../booksell/booksell.component';
import { BuyComponent } from '../buy/buy.component';
import { LogComponent } from '../log/log.component';
import { OrdersComponent } from '../orders/orders.component';
// import { MbooksComponent } from '../mbooks/mbooks.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegComponent } from '../reg/reg.component';
import { ViewcComponent } from '../viewc/viewc.component';
// import { ViewComponent } from '../view/view.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { CartComponent } from './cart/cart.component';
import { ComboComponent } from './combo/combo.component';
import { LoginComponent } from './login/login.component';
import { MlbooksComponent } from './mlbooks/mlbooks.component';
import { ProductsComponent } from './products.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent },
  
  { path:'product/cart', component:CartComponent},
  { path:'wish-list', component:WishListComponent},
  {path: 'buy',component:BuyComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'viewc/:id', component:ViewcComponent},
  // { path:'all-books', component:AllBooksComponent},

  {path: 'booksell' ,component:BooksellComponent},
  {path: 'orders' ,component:OrdersComponent},
 
  // {path :'register' ,component:RegisterComponent},
  // {path: 'login', component:LoginComponent},
  { path :'log',component:LogComponent},
  {path:'combo',component:ComboComponent},
  {path:'reg',component:RegComponent},
  // {path:'mbooks',component:MbooksComponent},
  {path:'mlbooks',component:MlbooksComponent},
  {path :'**', component:PageNotFoundComponent},
 
  // { path:'view',component:ViewComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
