import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/core/model/projet';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projet: any;
  search: string;
  
  public test: boolean = true;

  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private currentRoute: ActivatedRoute,
    private router:Router,) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    if (id) {
      this.test = false;
      this.getList(id);
    } else {
      this.crudsService.getAll(this.AdvancedService.ProjetControllerName).subscribe((data: Projet[]) =>{this.projet=data} )
    }
  }

  getList(id: number) {

    this.AdvancedService.retrieveData('/projet/projets-of-equipe/', id).subscribe({
      next: (data) => {
        this.projet = data;
      }
    });
  }
  delete(p:Projet){
    this.crudsService.delete(this.AdvancedService.ProjetControllerName,p.idprojet).subscribe(

    ()=> {
      this.alertService.alert("SUCCESS","Project deleted successfuly");
      this.router.navigate(['/admin/projets'])
    })
  }

}
