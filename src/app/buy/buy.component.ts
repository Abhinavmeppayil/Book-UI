import { Component, OnInit } from '@angular/core';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

 

}
