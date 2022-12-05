import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/core/model/cours';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-assign-cours-to-university',
  templateUrl: './assign-cours-to-university.component.html',
  styleUrls: ['./assign-cours-to-university.component.css']
})
export class AssignCoursToUniversityComponent implements OnInit {

  public idUniv : number
  public idCour: number
  public listCour: Cours[];
  public test: boolean=false

  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idUniv = this.currentRoute.snapshot.params['idUniv'];
    this.crudsService.getAll(this.AdvancedService.CoursControllerName).subscribe({
      next: (params) => {
        this.listCour = params;
      },
      error: () =>{console.error('error');},
      complete: () => {console.log('complete');}
    })
    }

    assingUnivDep(cours: Cours){
      this.AdvancedService.assignUniversityTocour(this.idUniv,cours.idCour).subscribe(
        () => {
          this.alertService.alert("SUCCESS","University assigned to cour successfuly");
          this.test=true;}
    )
  }

  removeSuccessAlertMsg(){
    this.test=false
  }

}
