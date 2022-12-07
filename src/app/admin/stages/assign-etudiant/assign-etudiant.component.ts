import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/model/etudiant';
import { Stage } from 'src/app/core/model/stage';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-assign-etudiant',
  templateUrl: './assign-etudiant.component.html',
  styleUrls: ['./assign-etudiant.component.css']
})
export class AssignEtudiantComponent implements OnInit {

  public etudiants: Etudiant[];
  public stage: Stage;
  public ids: number;
  public search: string;
  
  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.ids = this.route.snapshot.params['ids'];
    //this.stage=this.crudsService.getById(this.AdvancedService.ContratControllerName,this.ids);
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

  affectStagetoEtudiant(e: number){
    this.AdvancedService.affectStageToEtudiant(this.ids, e).subscribe(
      () => {
        this.alertService.alert("SUCCESS"," Stage assigned to student successfuly");
        this.router.navigate(['/admin/stages/ListeStages'])}
    );
  }


}
