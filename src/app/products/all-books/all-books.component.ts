import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  allbooks:any=[];
  searchterm:string=''

 

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getBooks().subscribe(
      (data:any)=>{
        this.allbooks=data.books
      }
    )
this.api.searchkey.subscribe(
  (data:any)=>{
    this.searchterm=data
  }
)




  }

  addtowishlist(books:any){
    this.api.addtowishlist(books).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )

  }

  addtocart(books:any){
    this.api.addtocart(books)
  }
}
