import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    ListEtudiantComponent,
    FormEtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule
  ]
})
export class EtudiantModule { }
