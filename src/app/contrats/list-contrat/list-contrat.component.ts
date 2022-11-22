import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  public title: String;
  public listContrat: Contrat[];

  constructor(
  private contratService : ContratService
  ) { }

  ngOnInit(): void {
    this.title=" Liste Contrats"
    this.contratService.getAllContrats().subscribe(
      (data:Contrat[]) => { this.listContrat = data},
      () => { console.log('error') },
      () => { console.log('complete') }
    )
    
  }

}
