import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/core/model/projet';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';
 

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
  action: String; 
  projet: Projet;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.projet= new Projet();
  
  let id= this.route.snapshot.params['id']
  if(id!=null){
    this.action="Update";
    this.crudsService.getById(this.AdvancedService.ProjetControllerName,id).subscribe(
      
      (data:Projet)=>this.projet=data
    )
  }
  else{
    this.action="Add"
    this.projet= new Projet();

    
  }
}
SaveProjet(){
  console.log(this.projet)
  if(this.action="Add"){
    console.log("add")
    this.crudsService.add(this.AdvancedService.ProjetControllerName,this.projet).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Projet Added successfuly");
        this.router.navigate(['/admin/projets/list'])
      }

    )
  }
  else if(this.action="Update"){
    
    console.log("update")
    this.crudsService.update(this.AdvancedService.ProjetControllerName,this.projet).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Projet Updated successfuly");
        this.router.navigate(['/admin/projets/list'])
      }
    )
  }

}
  


}
