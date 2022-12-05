import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/core/model/stage';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-stage-card-parent',
  templateUrl: './stage-card-parent.component.html',
  styleUrls: ['./stage-card-parent.component.css']
})
export class StageCardParentComponent implements OnInit {

  
  public listStage: Stage[]
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.getAll()
    }

    incrementNbrLike(s: Stage) {
      this.AdvancedService.incrementLikes(this.AdvancedService.StageControllerName, s).subscribe(
        () => {
          this.getAll()
        }
      )
    }

    getAll(){
      this.crudsService.getAll(this.AdvancedService.StageControllerName).subscribe({
        next:(data)=>{
          this.listStage=data;  
        },
        error: ()=>{console.log('error')},
        complete :()=>{console.log('complete')}
       })
    }
}
