import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
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

  constructor(
     private AdvancedService : AdvancedServicesService,
     private crudsService : CrudsService,
     private currentRoute: ActivatedRoute,
     private router: Router) { }

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
      () => {this.router.navigate(['/student/list'])}
    );
  }

}
