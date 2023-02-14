import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitem:any=[]

  constructor( private api:ApiService) { }

  ngOnInit(): void {

    this.api.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitem=data
        
      }
    )
  }

}
