import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/core/model/projet';
import { ProjetService } from 'src/app/core/services/project.service';
 

@Component({
  selector: 'app-form-projet',
  templateUrl: './form-projet.component.html',
  styleUrls: ['./form-projet.component.css']
})
export class FormProjetComponent implements OnInit {
  action: String; 
  projet: Projet;

  constructor(private router: Router, private route: ActivatedRoute, private projetservice: ProjetService) { }

  ngOnInit(): void {
    this.projet= new Projet();
  
  let id= this.route.snapshot.params['id']
  if(id!=null){
    this.action="Update";
    this.projetservice.getProjetByID(id).subscribe(
      
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
    this.projetservice.addProjet(this.projet).subscribe(
      ()=>this.router.navigate(['/projets/list'])

    )
  }
  else if(this.action="Update"){
    
    console.log("update")
    this.projetservice.updateProjet(this.projet).subscribe(
      ()=>this.router.navigate(['/projets/list'])
    )
  }

}
  


}
