import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-details-contrat',
  templateUrl: './details-contrat.component.html',
  styleUrls: ['./details-contrat.component.css']
})
export class DetailsContratComponent implements OnInit {

  public contrat:Contrat;
  public title:String;
  
  constructor(
    private alertService : AlertService,
    private crudsService : CrudsService,
    private AdvancedService : AdvancedServicesService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['idC'];
    if(id!=null){
      this.crudsService.getById(this.AdvancedService.ContratControllerName,id).subscribe(
        (data:Contrat)=>this.contrat=data
      )
    }else{
      this.contrat = new Contrat();
      this.router.navigate(['/admin/contrats/ListeContrats'])
    }
  }
  deleteContrat(c: Contrat): void{
    this.crudsService.delete(this.AdvancedService.ContratControllerName,c.idContrat).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Contrat  Deleted successfuly");
        this.router.navigate(['/admin/contrats/ListeContrats'])
      }
    );
  }
  

}
