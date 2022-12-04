import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'src/app/core/model/projet';
import { ProjetService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projet: Projet[];
  search: string;

  constructor(private projetservice: ProjetService, private router:Router) { }

  ngOnInit(): void {
    this.projetservice.getAllProjet().subscribe((data: Projet[]) =>{this.projet=data} )
  }
  delete(p:Projet){
    this.projetservice.deleteProjet(p.idprojet).subscribe(

    ()=> {this.router.navigate(['/projets'])})
  }

}
