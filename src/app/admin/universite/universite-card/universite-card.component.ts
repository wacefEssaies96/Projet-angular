import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-universite-card',
  templateUrl: './universite-card.component.html',
  styleUrls: ['./universite-card.component.css']
})
export class UniversiteCardComponent implements OnInit {

  public idu: number;
  public univer: Universite;
  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.idu = this.route.snapshot.params['id'];
    this.crudsService.getById(this.AdvancedService.UniversiteControllerName,this.idu).subscribe(
      (params:Universite)=>{this.univer = params;}
    )
  }

  cancel(){
    this.router.navigate(['/admin/universite/list'])
  }
}
