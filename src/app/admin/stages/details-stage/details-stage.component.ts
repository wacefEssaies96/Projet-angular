import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/core/model/stage';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-details-stage',
  templateUrl: './details-stage.component.html',
  styleUrls: ['./details-stage.component.css']
})
export class DetailsStageComponent implements OnInit {

  public stage:Stage;
  public title:String;
  
  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['idS'];
    if(id!=null){
      this.crudsService.getById(this.AdvancedService.StageControllerName,id).subscribe(
        (data:Stage)=>this.stage=data
      )
    }else{
      this.stage = new Stage();
      this.router.navigate(['/admin/stages/ListeStages'])
    }
  }
  deleteStage(s: Stage): void{
    this.crudsService.delete(this.AdvancedService.StageControllerName,s.idStage).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Stage  Deleted successfuly");
        this.router.navigate(['/admin/stages/ListeStages'])}
    );
  }
  

}
