import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/core/model/contrat';
import { Etudiant } from 'src/app/core/model/etudiant';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-affect-contrat-to-etudiant',
  templateUrl: './affect-contrat-to-etudiant.component.html',
  styleUrls: ['./affect-contrat-to-etudiant.component.css']
})
export class AffectContratToEtudiantComponent implements OnInit {

  public etudiants: Etudiant[];
  public contrat: Contrat;
  public idc: number;
  public search: string;
  
  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.idc = this.route.snapshot.params['idc'];
    this.contrat=this.crudsService.getById(this.AdvancedService.ContratControllerName,this.idc);
    this.crudsService.getAll(this.AdvancedService.EtudiantControllerName).subscribe({
      next : (params) => {
        this.etudiants = params;
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{
        console.log('complete');
      }
    });
  }

  affectContrattoEtudiant(etudiant: Etudiant){
    this.AdvancedService.affectContratToEtudiant(etudiant.nomE,etudiant.prenomE,this.contrat).subscribe(
      () => {
        this.alertService.alert("SUCCESS"," Contract assigned to student successfuly");
        this.router.navigate(['/admin/contrats/ListeContrats'])}
    );
  }

}
