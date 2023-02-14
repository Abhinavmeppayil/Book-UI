import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x:string]:any

  uname = " ";
  email = " ";
  pswd = " "

  constructor(private fb:FormBuilder, private router:Router) { }


  // registration 
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z*')]],
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z,0-9]*')]]

  })
  register(){
    console.log(this.registerForm);
    
    
  }


  ngOnInit(): void {
  }

}
