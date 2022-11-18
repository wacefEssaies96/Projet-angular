import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratsComponent } from './contrats.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  { path: '', component: ContratsComponent,children:[ 
    { path: '', component: ListContratComponent },
    { path: 'ListeContrats', component: ListContratComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratsRoutingModule { }
