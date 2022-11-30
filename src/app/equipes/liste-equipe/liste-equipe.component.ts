import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { EquipeService } from 'src/app/core/services/equipe.service';

@Component({
  selector: 'app-listeequipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListequipesComponent implements OnInit {
  public list: Equipe [];
  
  constructor(private equipeservice: EquipeService, private router:Router) { }

  ngOnInit(): void {
    this.equipeservice.getAllEquipe().subscribe((data: Equipe[]) =>{this.list=data} )
  }
  delete(eq:Equipe){
    this.equipeservice.deleteEquipe(eq.idEquipe).subscribe(

    ()=> {this.router.navigate(['/equipes'])})
  }

}
