import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './stages.component';
import { ListStageComponent } from './list-stage/list-stage.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchStage } from 'src/app/core/search/search-stage';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssignEtudiantComponent } from './assign-etudiant/assign-etudiant.component';


@NgModule({
  declarations: [
    StagesComponent,
    ListStageComponent,
    FormStageComponent,
    DetailsStageComponent,
    SearchStage,
    AssignEtudiantComponent
  ],
  imports: [
    CommonModule,
    StagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class StagesModule { }
