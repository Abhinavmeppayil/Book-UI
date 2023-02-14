import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-mbooks',
  templateUrl: './mbooks.component.html',
  styleUrls: ['./mbooks.component.css']
})
export class MbooksComponent implements OnInit {

  mbooks:any=[]

  constructor( private api:ApiService) { 
    
  }

  ngOnInit(): void {

    this.api.getMbooks().subscribe(
      (data:any)=>{
        this.mbooks=data.books
        
      }
    )
  }

}
