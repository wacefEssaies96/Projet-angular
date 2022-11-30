import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant, option } from 'src/app/core/model/etudiant';
import { EtudiantService } from 'src/app/core/services/etudiant.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {

  public form: FormGroup;
  public action: String;
  public etudiant: Etudiant;

  constructor(
    private formBuilder: FormBuilder, 
    private etudiantService: EtudiantService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomE: ['', [Validators.required]],
      prenomE: ['', [Validators.required]],
      dateDebut: ['', [Validators.required]],
      op: ['', [Validators.required]]
    });
    let id = this.currentRoute.snapshot.params['id'];
    if(id != null){
      this.action = 'Update';
      this.etudiantService.getEtudiantByID(id).subscribe(
        (object: Etudiant)=> this.etudiant = object
      )
    }else{
      this.action = 'Add';
      this.etudiant = new Etudiant();
    }
  }

  submit(){
    if(this.action == 'Add'){
      this.etudiantService.addEtudiant(this.etudiant).subscribe(
        ()=>{ this.router.navigate(['/student/list'])}
      );
    }
    if(this.action == 'Update'){
      this.etudiantService.updateEtudiant(this.etudiant).subscribe(
        () => this.router.navigate(['/student/list'])
      )
    }
    else{
      this.router.navigate(['/student/list']);
    }
  }

}
