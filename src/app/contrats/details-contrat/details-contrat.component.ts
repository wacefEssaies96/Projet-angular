import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-details-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {

  public contrat:Contrat;
  public title:String;
  
  constructor(
    private contratService : ContratService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['idC'];
    if(id!=null){
      this.contratService.getContratByID(id).subscribe(
        (data:Contrat)=>this.contrat=data
      )
    }else{
      this.contrat = new Contrat();
      this.router.navigate(['/contrats/ListeContrats'])
    }
  }
  deleteContrat(c: Contrat): void{
    this.contratService.deleteContrat(c.idContrat).subscribe(
      ()=>{this.router.navigate(['/contrats/ListeContrats'])}
    );
  }
  

}
