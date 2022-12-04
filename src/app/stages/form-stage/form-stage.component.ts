import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/core/model/stage';
import { CrudsService } from 'src/app/core/services/cruds.service';
import { StageService } from 'src/app/core/services/stage.service';

@Component({
  selector: 'app-form-stage',
  templateUrl: './form-stage.component.html',
  styleUrls: ['./form-stage.component.css']
})
export class FormStageComponent implements OnInit {

  public action : string;
  public stage : Stage;

  constructor(
    private crudsService: CrudsService,
    private stageService: StageService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {      
  let id= this.route.snapshot.params['idS'];
  if(id!=null){
    this.action="Update";
    this.crudsService.getById(this.stageService.StageControllerName,id).subscribe(
      (data:Stage)=> {this.stage=data}
    )
    
  }else
  { this.action="Add";
    this.stage = new Stage();}
  }

  SaveStage(){
    if(this.action=='Add'){
      this.crudsService.add(this.stageService.StageControllerName,this.stage).subscribe(
        ()=>{this.router.navigate(['/stages/ListeStages'])}
      )
    }
    else if(this.action=='Update'){
      this.crudsService.update(this.stageService.StageControllerName,this.stage).subscribe(
        ()=>{this.router.navigate(['/stages/ListeStages'])}
      )
    }
  }

}
