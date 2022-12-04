import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/core/model/stage';
import { CrudsService } from 'src/app/core/services/cruds.service';
import { StageService } from 'src/app/core/services/stage.service';

@Component({
  selector: 'app-details-stage',
  templateUrl: './details-stage.component.html',
  styleUrls: ['./details-stage.component.css']
})
export class DetailsStageComponent implements OnInit {

  public stage:Stage;
  public title:String;
  
  constructor(
    private crudsService : CrudsService,
    private stageService : StageService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['idS'];
    if(id!=null){
      this.crudsService.getById(this.stageService.StageControllerName,id).subscribe(
        (data:Stage)=>this.stage=data
      )
    }else{
      this.stage = new Stage();
      this.router.navigate(['/stages/ListeStages'])
    }
  }
  deleteStage(s: Stage): void{
    this.crudsService.delete(this.stageService.StageControllerName,s.idStage).subscribe(
      ()=>{this.router.navigate(['/stages/ListeStages'])}
    );
  }
  

}
