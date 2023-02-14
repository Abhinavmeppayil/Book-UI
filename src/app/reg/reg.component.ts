import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../products/api.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  uname ="";
  email = "";
  pswd = "";

  constructor(private fb:FormBuilder ,private ds:ApiService) { }

  registerForm = this.fb.group({
    uname : ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email : ['',[Validators.required,Validators.email]],
    pswd :['',[Validators.required,Validators.pattern('[0-9,a-zA-z]*')]]
  })

  register(){
    console.log(this.register);

    let uname = this.registerForm.value.uname;
    let email = this.registerForm.value.email;
    let pswd = this.registerForm.value.pswd

    
    if(this.registerForm.valid){
       this.ds.register(uname,email,pswd).subscribe((result:any)=>{
        alert(result.message)
       })

    }
    
  }

  ngOnInit(): void {
  }

}
