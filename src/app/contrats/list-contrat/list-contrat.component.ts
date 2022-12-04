import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contrat } from 'src/app/core/model/contrat';
import { ContratService } from 'src/app/core/services/contrat.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {

  searchValue = new FormControl('');
  searchCategory = new FormControl(''); 
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  public title: String;
  public listContrat: any[];

  constructor(
  private contratService : ContratService,
  private crudsService : CrudsService
  ) { }

  ngOnInit(): void {
    this.title=" Liste Contrats";
    this.fetchContrats();
    
  }
  fetchContrats(): void {
    this.crudsService.getAll(this.contratService.ContratControllerName).subscribe(
      (data:Contrat[]) => {
        this.listContrat = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchContrats();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchContrats();
  }

}
