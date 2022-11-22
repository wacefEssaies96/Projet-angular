import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContratsComponent,
    ListContratComponent,
    FormContratComponent,
    DetailsContratComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContratsModule { }
