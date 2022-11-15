import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //this.form= new FormGroup(
    //  {login: new FormControl('test',[Validators.required, Validators.minLength(3)]),
    //   psw: new FormControl('test',[Validators.pattern("[0-9 ]{8}")]),
    //}
    //)
    this.form= this.fb.group(
      {
        'title':[Validators.required, Validators.minLength(3)],
         'psw': [Validators.pattern("[0-9 ]{8}")],
      }
    )
  }
 save(){
   console.log(this.form.value.login)
 }
}
