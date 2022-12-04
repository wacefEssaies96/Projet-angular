import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public etudiants: Etudiant[];
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

}
