import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mlbooks',
  templateUrl: './mlbooks.component.html',
  styleUrls: ['./mlbooks.component.css']
})
export class MlbooksComponent implements OnInit {

  mbooks:any=[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    
    this.api.getMbooks().subscribe(
      (data:any)=>{
        this.mbooks=data.books
        
      }
    )
  }
  }


