import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { DetailsStageComponent } from './details-stage/details-stage.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { ListStageComponent } from './list-stage/list-stage.component';
import { StagesComponent } from './stages.component';

const routes: Routes = [{ path: '', component: StagesComponent ,children:[ 
  { path: '', component: ListStageComponent },
  { path: 'details/:idS', component: DetailsStageComponent, canActivate: [AuthGuardService] },
  { path: 'ListeStages', component: ListStageComponent, canActivate: [AuthGuardService] },
  { path: 'addStage', component: FormStageComponent, canActivate: [AuthGuardService] },
  { path: 'updateStage/:idS', component: FormStageComponent, canActivate: [AuthGuardService] }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesRoutingModule { }
