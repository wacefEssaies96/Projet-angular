import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-formdepartements',
  templateUrl: './formdepartements.component.html',
  styleUrls: ['./formdepartements.component.css']
})
export class FormdepartementsComponent implements OnInit {
  public label: String;
  public action: String = "editer";
  public departement: Departement;
  msg: String;
  url: any
  constructor( 
    private alertService : AlertService,
    private router: Router, 
    private currentRoute: ActivatedRoute, 
    private ds: CrudsService, 
    private u: AdvancedServicesService
    ) { }

  ngOnInit(): void {

    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = "editer ";
      this.ds.getById(this.u.DepartementControllerName, id).subscribe(
        (object: Departement) => { this.departement = object }
      )
    } else {
      this.action = "add";
      this.departement = new Departement();
    }

  }
  saveDepartement() {
    if (this.action == 'add') {
      //this.productService.list.push(this.product);
      this.ds.add(this.u.DepartementControllerName, this.departement).subscribe(
        () => {
        this.alertService.alert("SUCCESS","Departement Added successfuly");
        this.router.navigate(["/admin/departements/list"]) }
      )
    }
    else if (this.action == "editer ") {
      this.ds.update(this.u.DepartementControllerName, this.departement).subscribe(
        () => {
          this.alertService.alert("SUCCESS","Departement Updated successfuly");
         // console.log('update : ' + this.departement)
          this.router.navigate(["/admin/departements/list"]) 
        }
      )
    }
  }




}
