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
  public search: string;
  public p:any;
  public key: String ='id';
  public reverse: boolean=false;

  constructor(
    private serviceUniv:UniversiteServiceService) { }

  ngOnInit(): void {

    this.title='List of Universities';
    this.serviceUniv.displayUniversites().subscribe({
    next:(data)=>{
      this.listUniver=data;
    },
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
  
  sort(key:String){
    this.key = key;
    this.reverse = !this.reverse;
  }
}