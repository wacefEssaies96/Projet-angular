import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-listeequipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListequipesComponent implements OnInit {
  public list: Equipe [];
  public search: string;
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router:Router) { }

  ngOnInit(): void {
    this.crudsService.getAll(this.AdvancedService.EquipeControllerName).subscribe((data: Equipe[]) =>{this.list=data} )
  }
  delete(eq:Equipe){
    this.crudsService.delete(this.AdvancedService.EquipeControllerName,eq.idEquipe).subscribe(

    ()=> {this.router.navigate(['/admin/equipes'])})
  }

}
