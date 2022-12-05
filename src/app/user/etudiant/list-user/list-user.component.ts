import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public etudiants: Etudiant[];
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    ) { }

  ngOnInit(): void {
    this.getAll()
  }

  incrementNbrLike(e: Etudiant) {
    this.AdvancedService.incrementLikes(this.AdvancedService.EtudiantControllerName, e).subscribe(
      () => {
        this.getAll()
      }
    )
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
}
