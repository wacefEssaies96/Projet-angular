import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/model/cours';
import { CoursService } from 'src/app/core/services/cours.service';

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
  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
  
    this.title='List of Courses';
    this.coursService.displayCours().subscribe({
    next:(data)=>{
      this.listCours=data;
    },
    error: ()=>{console.log('error')},
    complete :()=>{console.log('complete')}
   })
  }

  deleteCours(c:Cours){
    let i=this.listCours.indexOf(c);
    this.coursService.deleteCours(c.idCour).subscribe(
      ()=>{this.listCours.splice(i,1)}
    )
  }

}
