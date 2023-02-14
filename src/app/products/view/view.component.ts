import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: any;
  url = '';
  books: any
  buynow: boolean = false




  constructor(private api: ApiService, private rout: ActivatedRoute, private fb: FormBuilder) { }
  buyform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    pincode: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required]]




  })

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id']
    if (this.id == 'id') {
      this.url = 'http://localhost:3000/getview'
    }
    this.getView(this.id)


  }



  getView(id: any) {
    const result = this.api.getView(id)
      .subscribe((result: any) => {
        this.books = result.books;
      },
        (result: any) => {
          alert(result.error.message);

        })
  }
  showbuynow() {
    this.buynow = !this.buynow
  }
  buybook(books: any) {
    let id =books.id
    let bookname=books.title
    let image = books.image
    let email=this.buyform.value.email
    let buyername=this.buyform.value.name
    let pincode=this.buyform.value.pincode
    let phone=this.buyform.value.phone
    let address=this.buyform.value.address

    let username = JSON.parse(localStorage.getItem('currentuser') || '')

    console.log(id,bookname,image,email,buyername,pincode,phone,address, username);
    

    this.api.buybook(id,bookname,image,email,buyername,pincode,phone,address, username).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )

  }



}
