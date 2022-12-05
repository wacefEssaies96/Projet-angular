import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { Projet } from 'src/app/core/model/projet';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-assign-projet',
  templateUrl: './assign-projet.component.html',
  styleUrls: ['./assign-projet.component.css']
})
export class AssignProjetComponent implements OnInit {

 
  public list: Equipe[];
  public ide: number;
  public search: string;

  constructor(
     private AdvancedService : AdvancedServicesService,
     private crudsService : CrudsService,
     private currentRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.ide = this.currentRoute.snapshot.params['ideq'];
    this.crudsService.getAll(this.AdvancedService.ProjetControllerName).subscribe({
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
  assignProToEquipe(projet: Projet){

    this.AdvancedService.assignProjetToEquipe(projet.idprojet,this.ide).subscribe(
      () => {this.router.navigate(['/admin/projets'])}
    );
  }
}
