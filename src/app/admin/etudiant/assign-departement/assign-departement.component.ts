import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-assign-departement',
  templateUrl: './assign-departement.component.html',
  styleUrls: ['./assign-departement.component.css']
})
export class AssignDepartementComponent implements OnInit {

  public list: Departement[];
  public ide: number;
  public search: string;
  public test: boolean=true;

  constructor(
     private alertService : AlertService,
     private AdvancedService : AdvancedServicesService,
     private crudsService : CrudsService,
     private currentRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.ide = this.currentRoute.snapshot.params['ide'];
    this.crudsService.getAll(this.AdvancedService.DepartementControllerName).subscribe({
      next: (params) => {
        this.list = params;
      },
      error: () =>{
        console.error();
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

  assignToDepartement(departement: Departement){
    this.AdvancedService.assignEtudiantToDepartement(this.ide,departement.idDepartement).subscribe(
      () => {
        this.alertService.alert("SUCCESS","Student assigned to departement successfuly");
        this.test=false;
        //this.router.navigate(['/admin/student/list'])
      }
     
    );
  }

  removeSuccessAlertMsg(){
    this.test=true
  }
}
