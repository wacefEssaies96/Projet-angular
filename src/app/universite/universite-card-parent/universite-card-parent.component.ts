import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

@Component({
  selector: 'app-universite-card-parent',
  templateUrl: './universite-card-parent.component.html',
  styleUrls: ['./universite-card-parent.component.css']
})
export class UniversiteCardParentComponent implements OnInit {

  public listUniver: Universite[]
  constructor(private us: UniversiteServiceService) { }

  ngOnInit(): void {
    this.us.displayUniversites().subscribe({
      next:(data)=>{
        this.listUniver=data;  
      },
      error: ()=>{console.log('error')},
      complete :()=>{console.log('complete')}
     })
    }

    deleteUniversite(u:Universite){
      let i=this.listUniver.indexOf(u);
      this.us.deleteUniversite(u.idUniv).subscribe(
        ()=>{this.listUniver.splice(i,1)}
      )
    }

}
