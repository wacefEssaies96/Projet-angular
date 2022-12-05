import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { ContratCardChildComponent } from './contrat-card-child/contrat-card-child.component';
import { ContratCardParentComponent } from './contrat-card-parent/contrat-card-parent.component';


@NgModule({
  declarations: [
    ContratsComponent,
    ContratCardChildComponent,
    ContratCardParentComponent
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule
  ]
})
export class ContratsModule { }
