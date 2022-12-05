import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-form-contrat',
  templateUrl: './form-contrat.component.html',
  styleUrls: ['./form-contrat.component.css']
})
export class FormContratComponent implements OnInit {

  public contrat:Contrat;
  public action:String;
  public form:FormGroup;
  constructor(
    private alertService : AlertService,
    private fb : FormBuilder,
    private crudsService : CrudsService,
    private AdvancedService : AdvancedServicesService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      dateDebutContrat: ['', [Validators.required]],
      dateFinContrat: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      archive: ['', [Validators.required]],
      montantContrat: ['', [Validators.required, Validators.min(100), Validators.max(90000)]]
    });

    let id = this.route.snapshot.params['idC'];
    if(id!=null){
      this.action="Update";
      this.crudsService.getById(this.AdvancedService.ContratControllerName,id).subscribe(
        (data:Contrat)=>this.contrat=data
      )
    }else{
      this.action="Add";
      this.contrat = new Contrat();
    }
  }
  SaveContrat(){
    if(this.action=="Add"){
      this.crudsService.add(this.AdvancedService.ContratControllerName,this.contrat).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","Contrat  Added successfuly");
          this.router.navigate(['/admin/contrats/ListeContrats'])
        }
      )
      
    }else if(this.action=="Update"){
      this.crudsService.update(this.AdvancedService.ContratControllerName,this.contrat).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","Contrat  Updated successfuly");
          this.router.navigate(['/admin/contrats/ListeContrats'])
        }
      )
    }
    
  }

}
