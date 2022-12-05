import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from './projets.component';
import { ProjetCardChildComponent } from './projet-card-child/projet-card-child.component';
import { ProjetCardParentComponent } from './projet-card-parent/projet-card-parent.component';


@NgModule({
  declarations: [
    ProjetsComponent,
    ProjetCardParentComponent,
    ProjetCardChildComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
