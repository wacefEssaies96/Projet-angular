import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { ContratsComponent } from './contrats.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  { path: '', component: ContratsComponent,children:[ 
    { path: '', component: ListContratComponent, canActivate: [AuthGuardService] },
    { path: 'details/:idC', component: DetailsContratComponent, canActivate: [AuthGuardService] },
    { path: 'ListeContrats', component: ListContratComponent, canActivate: [AuthGuardService] },
    { path: 'addContrat', component: FormContratComponent, canActivate: [AuthGuardService] },
    { path: 'updateContrat/:idC', component: FormContratComponent, canActivate: [AuthGuardService] }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
