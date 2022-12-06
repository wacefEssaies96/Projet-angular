import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/core/model/cours';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})
export class FormCoursComponent implements OnInit {

  public form: FormGroup;
  public action: String;
  public cours: Cours;
  public test: boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService : AlertService,
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      codeCour: ['', [Validators.required, Validators.min(3)]],
      intituleCour: ['', [Validators.required]],
      typeCour: ['', [Validators.required]]
    });

    let id = this.currentRoute.snapshot.params['id'];
    if(id != null){
      this.action = 'Update';
      this.crudsService.getById(this.AdvancedService.CoursControllerName,id).subscribe(
        (object: Cours)=> this.cours = object
      )
    }else{
      this.action = 'Add';
      this.cours = new Cours();
    }
  }

  submit(){
    if(this.action == 'Add'){
      this.crudsService.add(this.AdvancedService.CoursControllerName,this.cours).subscribe(
        ()=>{
          this.alertService.alert("SUCCESS","Course added successfuly");
          this.router.navigate(['/admin/cours/list'])}
      );
    }
    else if(this.action == 'Update'){
      this.crudsService.update(this.AdvancedService.CoursControllerName,this.cours).subscribe(
        () => {
          this.alertService.alert("SUCCESS","Course updated successfuly");
          this.router.navigate(['/admin/cours/list'])
        }
      )
    }
    else{
      this.router.navigate(['/admin/cours/list']);
    }
  }

  removeAlertMsg(){
    this.test=true
  }

}
