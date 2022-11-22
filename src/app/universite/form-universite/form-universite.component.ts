import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { UniversiteServiceService } from 'src/app/core/services/universite-service.service';

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})
export class FormUniversiteComponent implements OnInit {

  public action : string;
  public universite : Universite;

  constructor(
    private univerService: UniversiteServiceService,
    private router: Router, 
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let idUniver=this.currentRoute.snapshot.params['id'];
    if(idUniver!=null){
      this.action="Update";
      this.univerService.getUniversiteById(idUniver).subscribe(
        (object: Universite)=>this.universite=object
      );
      
    }
    else{
      this.action="Add";
      this.universite = new Universite();
    }
  }

  saveUniversite(){
    if(this.action=='Add'){
      this.univerService.addUniversite(this.universite).subscribe(
        ()=>{this.router.navigate(['/universite/list'])}
      )
    }
    else if(this.action=='Update'){
      this.univerService.updateUniversite(this.universite).subscribe(
        ()=>{this.router.navigate(['/universite/list'])}
      )
    }
  }

}
