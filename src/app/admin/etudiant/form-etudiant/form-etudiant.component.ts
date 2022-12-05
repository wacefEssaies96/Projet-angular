import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/core/model/etudiant';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

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
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomE: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      prenomE: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      dateNaissance: ['', [Validators.required]],
      op: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]
    });
    let id = this.currentRoute.snapshot.params['id'];
    let u = this.currentRoute.snapshot.url[0].path;
    if (id != null) {
      this.action = 'Update';
      this.crudsService.getById(this.AdvancedService.EtudiantControllerName, id).subscribe(
        (object: Etudiant) => this.etudiant = object
      )
    } else {
      if (u == "register") {
        this.action = 'Register';
      } else {
        this.action = 'Add';
      }
      this.etudiant = new Etudiant();
    }
  }

  submit() {
    if (this.action == 'Add') {
      this.crudsService.add(this.AdvancedService.EtudiantControllerName, this.etudiant).subscribe({
        next: () => {
          this.router.navigate(['/admin/student/'])
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log("complete")
        }
      });
    }
    else if(this.action == 'Register'){
      this.auth.register(this.etudiant).subscribe({
        next: () => {
          this.router.navigate(['login'])
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log("complete")
        }
      });
    }
    else if (this.action == 'Update') {
      this.crudsService.update(this.AdvancedService.EtudiantControllerName, this.etudiant).subscribe({
        next: () => {
          this.router.navigate(['/admin/student/'])
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log("complete")
        }
      });
    }
  }

}
