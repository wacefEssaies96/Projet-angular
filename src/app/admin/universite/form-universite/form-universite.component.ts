import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/core/model/universite';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})

export class FormUniversiteComponent implements OnInit {

  public action : String;
  public universite : Universite;
  public test: boolean=false;

  constructor(
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router: Router, 
    private currentRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    let idUniver=this.currentRoute.snapshot.params['id'];
    if(idUniver!=null){
      this.action="Update";
      this.crudsService.getById(this.AdvancedService.UniversiteControllerName,idUniver).subscribe(
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
      this.crudsService.add(this.AdvancedService.UniversiteControllerName,this.universite).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","University Added successfuly");
          this.router.navigate(['/admin/universite/list'])}
      )
    }
    else if(this.action=='Update'){
      this.crudsService.update(this.AdvancedService.UniversiteControllerName,this.universite).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","University Update successfuly");
          this.router.navigate(['/admin/universite/list'])}
      )
    }
  }

  cancel() {
    this.router.navigate(['/admin/universite/list']);
  }

  removeAlertMsg(){
    this.test=true
  }

}