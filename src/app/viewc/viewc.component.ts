import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {
  id:any;
  url='';
  books:any

  constructor( private api:ApiService, private rout:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.rout.snapshot.params['id']
    if(this.id=='id'){
      this.url='http://localhost:3000/getview'
    }
      this.getView1(this.id)
    
  }

  getView1(id:any){
    const result = this.api.getView1(id)
    .subscribe((result:any)=>{
      this.books=result.books;
    },
    (result:any)=>{
      alert(result.error.message);

    })
  }

}
