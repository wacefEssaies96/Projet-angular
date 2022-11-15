import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   // this.form= new FormGroup(
     // {
      //  email: new FormControl('',[Validators.required, Validators.email]),
       // psw:new FormControl('',[Validators.required, Validators.minLength(5)])
     // }
    //)
    this.form= this.fb.group(
      {
        email:['',[Validators.required, Validators.email]],
        psw:['',[Validators.required, Validators.minLength(5)]]
      }
    )
  }
  login(){
    console.log('email: '+this.form.value.email);
    console.log('password: '+this.form.value.psw);
    //ts
  }
}
