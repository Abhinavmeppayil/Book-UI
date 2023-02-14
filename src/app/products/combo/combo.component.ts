import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  combos:any = []
  cartitem:any=[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getCombos().subscribe(
      (data:any)=>{
        this.combos=data.books
        
      }
    )

    
    this.api.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitem=data
        
      }
    )

    
  }

  addtocart(books:any){
    this.api.addtocart(books)

  }  


}