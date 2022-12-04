import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './stages.component';
import { ListStageComponent } from './list-stage/list-stage.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchStage } from '../core/search/search-stage';


@NgModule({
  declarations: [
    StagesComponent,
    ListStageComponent,
    FormStageComponent,
    DetailsStageComponent,
    SearchStage
  ],
  imports: [
    CommonModule,
    StagesRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class StagesModule { }
