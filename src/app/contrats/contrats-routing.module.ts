import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratsComponent } from './contrats.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  { path: '', component: ContratsComponent,children:[ 
    { path: '', component: ListContratComponent },
    { path: 'details/:idC', component: DetailsContratComponent },
    { path: 'ListeContrats', component: ListContratComponent },
    { path: 'addContrat', component: FormContratComponent },
    { path: 'updateContrat/:idC', component: FormContratComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
