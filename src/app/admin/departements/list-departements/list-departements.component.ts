import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/core/model/departement';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.css']
})
export class ListDepartementsComponent implements OnInit {
  list: any;
  search: any;
  constructor(
    private alertService: AlertService,
    private ds: CrudsService, 
    private u: AdvancedServicesService
    ) { }

  ngOnInit(): void {
    this.ds.getAll(this.u.DepartementControllerName).subscribe(res => {
      this.list = res; console.log(res)

    }
    )
  }
  delete(d: Departement) {
    let i = this.list.indexOf(d);
    this.ds.delete(this.u.DepartementControllerName, d.idDepartement).subscribe(
      () => {
        this.alertService.alert("SUCCESS","Departement deleted successfuly");
        this.list.splice(i, 1) }
    )
  }
}
