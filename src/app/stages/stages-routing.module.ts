import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { ListStageComponent } from './list-stage/list-stage.component';
import { StagesComponent } from './stages.component';

const routes: Routes = [{ path: '', component: StagesComponent ,children:[ 
  { path: '', component: ListStageComponent },
  { path: 'details/:idS', component: DetailsStageComponent },
  { path: 'ListeStages', component: ListStageComponent },
  { path: 'addStage', component: FormStageComponent },
  { path: 'updateStage/:idS', component: FormStageComponent }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesRoutingModule { }
