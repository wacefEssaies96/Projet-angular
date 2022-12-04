import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { CrudsService } from 'src/app/core/services/cruds.service';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  public etudiants: Etudiant[];
  public search: string;

  constructor(private crudsService: CrudsService) { }

  ngOnInit(): void {
    this.crudsService.getAll("/etudiant").subscribe({
      next : (params) => {
        this.etudiants = params;
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{
        console.log('complete');
      }
    });
  }

  delete(e: Etudiant){
    let i = this.etudiants.indexOf(e);
    this.crudsService.delete("/etudiant", e.idEtudiant).subscribe(
      ()=>{this.etudiants.splice(i,1)}
    );
  }

}