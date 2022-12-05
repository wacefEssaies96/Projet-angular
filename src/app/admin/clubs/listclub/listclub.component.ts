import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/core/model/club';

@Component({
  selector: 'app-listclub',
  templateUrl: './listclub.component.html',
  styleUrls: ['./listclub.component.css']
})
export class ListclubComponent implements OnInit {
  public clubs: Club[];
  public search: string;
  constructor(private clubService : ClubService) { }

  ngOnInit(): void {
    this.clubService.getAllClub().subscribe({
      next : (params) => {
        this.clubs = params;
      },
      error: (error)=>{
        console.log(error);
      },
      complete: ()=>{
        console.log('complete');
      }
    });
  }
  delete(c: Club){
    let i = this.clubs.indexOf(c);
    this.clubService.deleteClub(c.idClub).subscribe(
      ()=>{this.clubs.splice(i,1)}
    );
  }
}




 

  

