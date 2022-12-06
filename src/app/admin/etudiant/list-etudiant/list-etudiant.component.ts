import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  public etudiants: Etudiant[];
  public search: string;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.crudsService.getAll(this.AdvancedService.EtudiantControllerName).subscribe({
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
    this.crudsService.delete(this.AdvancedService.EtudiantControllerName, e.idEtudiant).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Student deleted successfuly");
        this.etudiants.splice(i,1)}
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAll();
  }
}
