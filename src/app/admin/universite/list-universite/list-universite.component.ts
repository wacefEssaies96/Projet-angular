import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

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
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {

    this.title='List of Universities';
    this.crudsService.getAll(this.AdvancedService.UniversiteControllerName).subscribe({
    next:(data)=>{
      this.listUniver=data;
    },
    error: ()=>{console.log('error')},
    complete :()=>{console.log('complete')}
   })
  }

  deleteUniversite(u:Universite){
    let i=this.listUniver.indexOf(u);
    this.crudsService.delete(this.AdvancedService.UniversiteControllerName,u.idUniv).subscribe(
      ()=>{this.listUniver.splice(i,1)}
    )
  }
  
  sort(key:String){
    this.key = key;
    this.reverse = !this.reverse;
  }
}