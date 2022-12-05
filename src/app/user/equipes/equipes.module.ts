import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { EquipeCardChildComponent } from './equipe-card-child/equipe-card-child.component';
import { EquipeCardParentComponent } from './equipe-card-parent/equipe-card-parent.component';


@NgModule({
  declarations: [
    EquipesComponent,
    EquipeCardChildComponent,
    EquipeCardParentComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule
  ]
})
export class EquipesModule { }
