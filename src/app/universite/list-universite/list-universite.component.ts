import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
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

  constructor(
    private serviceUniv:UniversiteServiceService
    ) { }

  ngOnInit(): void {
    this.title='List of Universities';
   this.serviceUniv.displayUniversites().subscribe({
    next:(data)=>{
      this.listUniver=data;
        console.log(data);

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

}
