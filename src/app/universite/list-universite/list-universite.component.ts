import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {

  public title: String;
  public universite: Universite;
  public listUniver: Universite[];
  // public form : FormGroup;
  public search: string;
  public test=this.activateRoute.snapshot.params[''];

  constructor(
    private serviceUniv:UniversiteServiceService,
    private fb:FormBuilder,
    private activateRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {

    // this.form=this.fb.group(
    //   {
    //     nomUniv:['',[Validators.required , Validators.name]]
    //   }
    //   )

    this.title='List of Universities';
    this.serviceUniv.displayUniversites().subscribe({
    next:(data)=>{
      this.listUniver=data;
        // console.log(data);

    },
    //(params) =>{console.log(params)},
    error: ()=>{console.log('error')},
    complete :()=>{console.log('complete')}
   })
  }

  deleteUniversite(u:Universite){
    let i=this.listUniver.indexOf(u);
    this.serviceUniv.deleteUniversite(u.idUniv).subscribe(
      ()=>{this.listUniver.splice(i,1)}
    )
  }

  // search(){
  //   console.log('nomUniv:' + this.form.value.nomUniv);
  //   this.serviceUniv.getUniversiteByName(this.form.value.nomUniv).subscribe(
  //     {
  //       next:(data)=>{
  //         this.universite=data;
  //         console.log(data);
  //       },
  //       error: ()=>{console.log('error')},
  //       complete :()=>{console.log('complete')}
  //     }
  //   )
  // }

}
