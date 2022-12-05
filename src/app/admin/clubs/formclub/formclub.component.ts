import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/core/model/club';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-formclub',
  templateUrl: './formclub.component.html',
  styleUrls: ['./formclub.component.css']
})
export class FormclubComponent implements OnInit {
  public form: FormGroup;
  public action: String;
  public club: Club;

  constructor(private formBuilder: FormBuilder,
    private clubService: CrudsService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private u: AdvancedServicesService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomClub: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateDeCreation: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
    let id = this.currentRoute.snapshot.params['id'];
    if (id != null) {
      this.action = 'Update';
      this.clubService.getById(this.u.ClubControllerName, id).subscribe(
        (object: Club) => this.club = object
      )
    } else {
      this.action = 'Add';
      this.club = new Club();
    }
  }
  submit() {
    if (this.action == 'Add') {
      this.clubService.add(this.u.ClubControllerName, this.club).subscribe(
        () => { this.router.navigate(['/admin/clubs/list']) }
      );
    }
    else if (this.action == 'Update') {
      this.clubService.update(this.u.ClubControllerName, this.club).subscribe(
        () => this.router.navigate(['/admin/clubs/list'])
      )
    }
    else {
      this.router.navigate(['/admin/clubs/list']);
    }
  }
}


