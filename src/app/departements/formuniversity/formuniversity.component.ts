import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-formuniversity',
  templateUrl: './formuniversity.component.html',
  styleUrls: ['./formuniversity.component.css']
})
export class FormuniversityComponent implements OnInit {

  public form: FormGroup;


  list: any;
  constructor(private ds:DepartementService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {  this.form = this.formBuilder.group({
   id: ['', [Validators.required, Validators.pattern("[0-9]+")]],

  });
  }
  retreived(){
/*
    //this.productService.list.push(this.product);
    this.ds.save(this.departement).subscribe(
      ()=>{this.router.navigate(["/departements/list"])}
    )


*/  this.ds.retrieve(Number(this.form.get("id")?.value)).subscribe(res=>{this.list=res;console.log(res)})
console.log("id"+this.form.get("id"))
  }

}
