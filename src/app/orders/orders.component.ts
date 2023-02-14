import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  allorders:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getorder();
  }

  getorder(){
    this.api.getorder().subscribe(
      (result:any) =>{
        this.allorders = result.orders
      }
    )
    
  }
 

}
