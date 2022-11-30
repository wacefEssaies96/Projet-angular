import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-list-departements',
  templateUrl: './list-departements.component.html',
  styleUrls: ['./list-departements.component.css']
})
export class ListDepartementsComponent implements OnInit {
  list: any;
  search:any;
  constructor(private ds:DepartementService) { }

  ngOnInit(): void {
    this.ds.getAllDepartements().subscribe(res=>{this.list=res;console.log(res)

    }
     )
  }
  delete(d:Departement){
    let i = this.list.indexOf(d);
    this.ds.delete(d.idDepartement).subscribe(
      ()=>{this.list.splice(i,1)}
    )
  }
}
