import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-universite-card-parent',
  templateUrl: './universite-card-parent.component.html',
  styleUrls: ['./universite-card-parent.component.css']
})
export class UniversiteCardParentComponent implements OnInit {

  public listUniver: Universite[]
  public p:any
  
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
    ) { }

  ngOnInit(): void {
    this.getAll()
    }

    incrementNbrLike(u: Universite) {
      this.AdvancedService.incrementLikes(this.AdvancedService.UniversiteControllerName, u).subscribe(
        () => {
          this.getAll()
        }
      )
    }

    getAll(){
      this.crudsService.getAll(this.AdvancedService.UniversiteControllerName).subscribe({
        next:(data)=>{
          this.listUniver=data;  
        },
        error: ()=>{console.log('error')},
        complete :()=>{console.log('complete')}
       })
    }
}
