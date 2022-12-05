import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/core/model/club';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-listclub',
  templateUrl: './listclub.component.html',
  styleUrls: ['./listclub.component.css']
})
export class ListclubComponent implements OnInit {
  public clubs: Club[];
  public search: string;
  constructor(private clubService : CrudsService, private u : AdvancedServicesService) { }

  ngOnInit(): void {
    this.clubService.getAll(this.u.ClubControllerName).subscribe({
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
    this.clubService.delete(this.u.ClubControllerName,c.idClub).subscribe(
      ()=>{this.clubs.splice(i,1)}
    );
  }
}




 

  

