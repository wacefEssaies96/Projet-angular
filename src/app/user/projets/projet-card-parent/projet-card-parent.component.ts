import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/core/model/projet';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-projet-card-parent',
  templateUrl: './projet-card-parent.component.html',
  styleUrls: ['./projet-card-parent.component.css']
})
export class ProjetCardParentComponent implements OnInit {

  public listProjet: Projet[]
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.crudsService.getAll(this.AdvancedService.StageControllerName).subscribe({
      next:(data)=>{
        this.listProjet=data;  
      },
      error: ()=>{console.log('error')},
      complete :()=>{console.log('complete')}
     })
    }

}
