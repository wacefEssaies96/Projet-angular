import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { ListequipesComponent } from './liste-equipe/liste-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EquipesComponent,
    ListequipesComponent,
    FormEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class EquipesModule { }
