import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/core/model/equipe';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
  public equipe:Equipe;
  public action: String;
  public form: FormGroup;
  eqnamePattern = "[A-Za-z]{6,12}$";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService
  ) {  }

  ngOnInit(): void {
    this.form=this.fb.group({
      nomEquipe: ['', [Validators.required,Validators.pattern(this.eqnamePattern)]],
      niveau: ['',[Validators.required]]

    }); 
    let id= this.route.snapshot.params['id']
    if(id!=null){
      this.action="Update";
      this.crudsService.getById(this.AdvancedService.EquipeControllerName,id).subscribe(
        
        (data:Equipe)=>this.equipe=data
      )
    }
    else{
      this.action="Add"
      this.equipe= new Equipe();

      
    }
  }
  SaveEquipe(){
    if(this.action="Add"){
      this.crudsService.add(this.AdvancedService.EquipeControllerName,this.equipe).subscribe(
        ()=>this.router.navigate(['/admin/equipes/ListeEquipes'])
  
      )
    }
    else if(this.action="Update"){
      this.crudsService.update(this.AdvancedService.EquipeControllerName,this.equipe).subscribe(
        ()=>this.router.navigate(['/admin/equipes/ListeEquipes'])
      )
    }
  }
    

}
