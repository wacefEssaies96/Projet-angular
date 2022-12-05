import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/model/equipe';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-equipe-card-parent',
  templateUrl: './equipe-card-parent.component.html',
  styleUrls: ['./equipe-card-parent.component.css']
})
export class EquipeCardParentComponent implements OnInit {

  public listEquipe: Equipe[]
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.crudsService.getAll(this.AdvancedService.EquipeControllerName).subscribe({
      next:(data)=>{
        this.listEquipe=data;  
      },
      error: ()=>{console.log('error')},
      complete :()=>{console.log('complete')}
     })
    }

}
