import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'src/app/core/model/projet';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projet: Projet[];
  search: string;

  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router:Router) { }

  ngOnInit(): void {
    this.crudsService.getAll(this.AdvancedService.ProjetControllerName).subscribe((data: Projet[]) =>{this.projet=data} )
  }
  delete(p:Projet){
    this.crudsService.delete(this.AdvancedService.ProjetControllerName,p.idprojet).subscribe(

    ()=> {this.router.navigate(['/admin/projets'])})
  }

}
