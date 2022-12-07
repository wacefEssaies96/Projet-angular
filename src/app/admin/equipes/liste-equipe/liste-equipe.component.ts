import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-listeequipe',
  templateUrl: './liste-equipe.component.html',
  styleUrls: ['./liste-equipe.component.css']
})
export class ListequipesComponent implements OnInit {
  public list: any;
  public search: string;
  public test: boolean = true;

  constructor(
    private alertService: AlertService,
    private AdvancedService: AdvancedServicesService,
    private crudsService: CrudsService,
    private currentRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    let idp = this.currentRoute.snapshot.params['idp'];
    if (id) {
      this.test = false;
      this.getList(id, '/equipe/equipes-of-student/');
    }
    else if (idp) {
      this.test = false;
      this.getList(idp, '/equipe/equipes-of-projet/');
    }
    else {
      this.crudsService.getAll(this.AdvancedService.EquipeControllerName).subscribe((data: Equipe[]) => { this.list = data })
    }

  }
  getList(id: number, url: string) {
    this.AdvancedService.retrieveData(url, id).subscribe({
      next: (data) => {
        this.list = data;
      }
    });
  }
  delete(eq: Equipe) {
    this.crudsService.delete(this.AdvancedService.EquipeControllerName, eq.idEquipe).subscribe(

      () => {
        this.alertService.alert("SUCCESS", "Team deleted successfuly");
        this.router.navigate(['/admin/equipes'])
      })
  }

}
