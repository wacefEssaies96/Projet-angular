import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';


@NgModule({
  declarations: [
    ContratsComponent,
    ListContratComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule
  ]
})
export class ContratsModule { }
