import { Component, OnInit } from '@angular/core';
import { Detaildepartements } from 'src/app/core/model/detaildepartements';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-listdetailsdepart',
  templateUrl: './listdetailsdepart.component.html',
  styleUrls: ['./listdetailsdepart.component.css']
})
export class ListdetailsdepartComponent implements OnInit {

  list: any;
  search: string;
  constructor(
    private alertService: AlertService,
    private dds: CrudsService,
    private dd: AdvancedServicesService
    ) { }

  ngOnInit(): void {
    this.dds.getAll(this.dd.DetailDepartementControllerName).subscribe(res => {
      this.list = res; console.log(res)

    }
    )
  }
  delete(dd: Detaildepartements) {
    let i = this.list.indexOf(dd);
    this.dds.delete(this.dd.DetailDepartementControllerName, dd.idDetailDepartement).subscribe(
      () => {
        this.alertService.alert("SUCCESS","Detail Departement deleted successfuly");
        this.list.splice(i, 1) }
    )
  }

}
