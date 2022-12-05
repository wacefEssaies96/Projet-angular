import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-assign-departement-to-university',
  templateUrl: './assign-departement-to-university.component.html',
  styleUrls: ['./assign-departement-to-university.component.css']
})
export class AssignDepartementToUniversityComponent implements OnInit {

  public idUniv : number
  public idDepartement: number
  public listDep: Departement[];
  public test: boolean=false

  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.idUniv = this.currentRoute.snapshot.params['idUniv'];
    this.crudsService.getAll(this.AdvancedService.DepartementControllerName).subscribe({
      next: (params) => {
        this.listDep = params;
      },
      error: () =>{console.error('error');},
      complete: () => {console.log('complete');}
    })
    }

    assingUnivDep(departement: Departement){
      this.AdvancedService.assignUniversityToDepartement(this.idUniv,departement.idDepartement).subscribe(
        () => {this.test=true;}
    )
  }

  removeSuccessAlertMsg(){
    this.test=false
  }
}