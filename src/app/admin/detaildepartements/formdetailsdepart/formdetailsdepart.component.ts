import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Detaildepartements } from 'src/app/core/model/detaildepartements';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-formdetailsdepart',
  templateUrl: './formdetailsdepart.component.html',
  styleUrls: ['./formdetailsdepart.component.css']
})
export class FormdetailsdepartComponent implements OnInit {
  public label: String;
  public action: String = "editer";
  public detaildepartement: Detaildepartements;
  msg: String;
  url: any;
  public form:FormGroup;
  constructor(
    private alertService : AlertService,
    private fb : FormBuilder,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private dds: CrudsService,
    private dd: AdvancedServicesService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreClasses: ['', [Validators.required, Validators.min(10), Validators.max(60)]],
      nombreEtages: ['', [Validators.required, Validators.min(2), Validators.max(5)]]
    });
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      //update
      this.action = "editer ";
      this.dds.getById(this.dd.DetailDepartementControllerName, id).subscribe(
        (object: Detaildepartements) => { this.detaildepartement = object }
      )
    } else {
      this.action = "add";
      this.detaildepartement = new Detaildepartements();
    }

  }
  saveDetaildepartements() {
    if (this.action == 'add') {
      //this.productService.list.push(this.product);
      this.dds.add(this.dd.DetailDepartementControllerName, this.detaildepartement).subscribe(
        () => {
        this.alertService.alert("SUCCESS","Detail departements Added successfuly");
        this.router.navigate(["/admin/detaildepartements/list"]) }
      )
    }
    else if (this.action == "editer ") {
      this.dds.update(this.dd.DetailDepartementControllerName, this.detaildepartement).subscribe(
        () => {
          this.alertService.alert("SUCCESS","Detail departements Updated successfuly");
         // console.log('update : ' + this.departement)
          this.router.navigate(["/admin/detaildepartements/list"])
        }
      )
    }
  }
}
