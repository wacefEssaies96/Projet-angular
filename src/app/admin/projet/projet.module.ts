import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { AssignProjetComponent } from '../equipes/assign-projet/assign-projet.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ProjetComponent,
    ListProjetComponent,
    FormProjetComponent,
    AssignProjetComponent
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ProjetModule { }
