import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './stages.component';
import { StageCardChildComponent } from './stage-card-child/stage-card-child.component';
import { StageCardParentComponent } from './stage-card-parent/stage-card-parent.component';


@NgModule({
  declarations: [
    StagesComponent,
    StageCardChildComponent,
    StageCardParentComponent
  ],
  imports: [
    CommonModule,
    StagesRoutingModule
  ]
})
export class StagesModule { }
