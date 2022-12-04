import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

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
    private serviceUniv:UniversiteServiceService,
    private serviceDep: DepartementService,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.idUniv = this.currentRoute.snapshot.params['idUniv'];
    this.serviceDep.getAllDepartements().subscribe({
      next: (params) => {
        this.listDep = params;
      },
      error: () =>{console.error('error');},
      complete: () => {console.log('complete');}
    })
    }

    assingUnivDep(departement: Departement){
      this.serviceUniv.assignUniversityToDepartement(this.idUniv,departement.idDepartement).subscribe(
        () => {this.test=true;}
    )
  }

  removeSuccessAlertMsg(){
    this.test=false
  }
}