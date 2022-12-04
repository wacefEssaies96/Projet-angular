import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/core/model/cours';
import { CoursService } from 'src/app/core/services/cours.service';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

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
    private serviceUniv:UniversiteServiceService,
    private serviceCour: CoursService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idUniv = this.currentRoute.snapshot.params['idUniv'];
    this.serviceCour.displayCours().subscribe({
      next: (params) => {
        this.listCour = params;
      },
      error: () =>{console.error('error');},
      complete: () => {console.log('complete');}
    })
    }

    assingUnivDep(cours: Cours){
      this.serviceUniv.assignUniversityToDepartement(this.idUniv,cours.idCour).subscribe(
        () => {this.test=true;}
    )
  }

  removeSuccessAlertMsg(){
    this.test=false
  }

}
