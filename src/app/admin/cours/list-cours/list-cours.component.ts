import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/model/cours';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

  public title: String;
  public cours: Cours;
  public listCours: Cours[];
  public search: string;
  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
  
    this.title='List of Courses';
    this.crudsService.getAll(this.AdvancedService.CoursControllerName).subscribe({
    next:(data)=>{
      this.listCours=data;
    },
    error: ()=>{console.log('error')},
    complete :()=>{console.log('complete')}
   })
  }

  deleteCours(c:Cours){
    let i=this.listCours.indexOf(c);
    this.crudsService.delete(this.AdvancedService.CoursControllerName,c.idCour).subscribe(
      ()=>{
        this.alertService.alert("SUCCESS","Course deleted successfuly");
        this.listCours.splice(i,1)
      }
    )
  }

}
