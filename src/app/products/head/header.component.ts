import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username =''
  cartcount:number=0

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.cartlist.subscribe(
      (data:any)=>{
        this.cartcount=data.length;
      }
    )


      

this.username=JSON.parse(localStorage.getItem('currentuser' )|| '')
    
  }
  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

  logOut(){
    localStorage.removeItem('currentuser')
    this.router.navigateByUrl('log')
    
  }

}
