import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/core/model/stage';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-form-stage',
  templateUrl: './form-stage.component.html',
  styleUrls: ['./form-stage.component.css']
})
export class FormStageComponent implements OnInit {

  public action : string;
  public stage : Stage;

  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {      
  let id= this.route.snapshot.params['idS'];
  if(id!=null){
    this.action="Update";
    this.crudsService.getById(this.AdvancedService.StageControllerName,id).subscribe(
      (data:Stage)=> {this.stage=data}
    )
    
  }else
  { this.action="Add";
    this.stage = new Stage();}
  }

  SaveStage(){
    if(this.action=='Add'){
      this.crudsService.add(this.AdvancedService.StageControllerName,this.stage).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","Stage added successfuly");
          this.router.navigate(['/admin/stages/ListeStages'])
        }
      )
    }
    else if(this.action=='Update'){
      this.crudsService.update(this.AdvancedService.StageControllerName,this.stage).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","Stage updated successfuly");
          this.router.navigate(['/admin/stages/ListeStages'])
        }
      )
    }
  }

}
