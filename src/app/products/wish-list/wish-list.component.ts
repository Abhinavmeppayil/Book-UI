import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  
  wishlist:any=[]
  emsg:any

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  
this.api.getwishlist().subscribe(
  (data:any)=>{
    this.wishlist= data.books
    console.log(this.wishlist);
    
    if(this.wishlist.length==0){
      this.emsg='empty wishlist'
    }
  },(data:any)=>{
    this.emsg=data.error.message
  }
)

}

deletewish(books:any){
  this.api.deletewish(books.title)
  .subscribe(
    (result:any)=>{
      alert(result.message)
      // this.router.navigateByUrl('wish-list')

      this.wishlist=result.wishlist
      // if(this.wishlist.length==0){
      //   this.emsg='empty wishlist'
      // }
      window.location.reload()

    },
    (result:any)=>{
      alert(result.error.message)
     
    }
  )

}


addtocart(books:any){
  this.api.addtocart(books)
  this.deletewish(books)
  // window.location.reload();

}
}
