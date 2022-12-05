import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-contrat-card-parent',
  templateUrl: './contrat-card-parent.component.html',
  styleUrls: ['./contrat-card-parent.component.css']
})
export class ContratCardParentComponent implements OnInit {

  public listContrat: Contrat[]
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.crudsService.getAll(this.AdvancedService.ContratControllerName).subscribe({
      next:(data)=>{
        this.listContrat=data;  
      },
      error: ()=>{console.log('error')},
      complete :()=>{console.log('complete')}
     })
    }

}
