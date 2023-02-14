import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiService ,private router:Router ) { }

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[0-9,a-zA-Z]*')]],

  })

  login(){
    let email = this.loginForm.value.email;
    let pswd = this.loginForm.value.pswd;
    console.log(this.loginForm.valid);
    
    if(this.loginForm.valid){
      console.log(email, pswd);
      
      this.api.login(email,pswd)
      .subscribe((result:any)=>{
        localStorage.setItem('currentuser',JSON.stringify(result.user.uname))
        // localStorage.setItem('currentemail',JSON.stringify(result.currenemail))
        alert(result.message)
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)

  
        
      }
      )
    }
  }

  ngOnInit(): void {
  }

}
