import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

@Component({
  selector: 'app-universite-card',
  templateUrl: './universite-card.component.html',
  styleUrls: ['./universite-card.component.css']
})
export class UniversiteCardComponent implements OnInit {

  public idu: number;
  public univer: Universite;
  constructor(private us: UniversiteServiceService, 
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.idu = this.route.snapshot.params['id'];
    this.us.getUniversiteById(this.idu).subscribe(
      (params)=>{this.univer = params;}
    )
  }

  cancel(){
    this.router.navigate(['/admin/universite/list'])
  }
}
