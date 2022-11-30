import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AssignDepartementComponent } from './assign-departement/assign-departement.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    ListEtudiantComponent,
    FormEtudiantComponent,
    AssignDepartementComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class EtudiantModule { }
