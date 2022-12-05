import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailequipe';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.css']
})
export class ListdetailComponent implements OnInit {
  public listt: DetailEquipe[];
  searchText: any;
  constructor(private ds: CrudsService, private u: AdvancedServicesService, private router: Router) { }

  ngOnInit(): void {
    this.ds.getAll(this.u.DetaileEquipeControllerName).subscribe(

      (res: DetailEquipe[]) => { this.listt = res; console.log(res) }
    )
  }
  delete(d: DetailEquipe) {

    this.ds.delete(this.u.DetaileEquipeControllerName, d.idDetailEquipe).subscribe();
    location.reload();
  }
}