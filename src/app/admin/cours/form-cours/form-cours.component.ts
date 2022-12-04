import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/core/model/cours';
import { CoursService } from 'src/app/core/services/cours.service';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})
export class FormCoursComponent implements OnInit {

  public form: FormGroup;
  public action: String;
  public cours: Cours;

  constructor(
    private formBuilder: FormBuilder, 
    private coursService: CoursService,
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
      this.coursService.getCoursById(id).subscribe(
        (object: Cours)=> this.cours = object
      )
    }else{
      this.action = 'Add';
      this.cours = new Cours();
    }
  }

  submit(){
    if(this.action == 'Add'){
      this.coursService.addCours(this.cours).subscribe(
        ()=>{ this.router.navigate(['/admin/cours/list'])}
      );
    }
    else if(this.action == 'Update'){
      this.coursService.updateCours(this.cours).subscribe(
        () => this.router.navigate(['/admin/cours/list'])
      )
    }
    else{
      this.router.navigate(['/admin/cours/list']);
    }
  }

}
