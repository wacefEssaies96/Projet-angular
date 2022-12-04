import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-assign-departement',
  templateUrl: './assign-departement.component.html',
  styleUrls: ['./assign-departement.component.css']
})
export class AssignDepartementComponent implements OnInit {

  public list: Departement[];
  public ide: number;
  public search: string;

  constructor(private ds: DepartementService,
     private es: EtudiantService,
     private currentRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.ide = this.currentRoute.snapshot.params['ide'];
    this.ds.getAllDepartements().subscribe({
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
    this.es.assignEtudiantToDepartement(this.ide,departement.idDepartement).subscribe(
      () => {this.router.navigate(['/student/list'])}
    );
  }

}
