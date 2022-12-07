import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContratComponent } from '../contrats/list-contrat/list-contrat.component';
import { ListequipesComponent } from '../equipes/liste-equipe/liste-equipe.component';
import { ContractsComponent } from '../home/contracts/contracts.component';
import { ListStageComponent } from '../stages/list-stage/list-stage.component';
import { AssignDepartementComponent } from './assign-departement/assign-departement.component';
import { EtudiantComponent } from './etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantComponent, children:[
    { path: '', component: ListEtudiantComponent },
    { path: 'list', component: ListEtudiantComponent },
    { path: 'add', component: FormEtudiantComponent },
    { path: 'update/:id', component: FormEtudiantComponent },
    { path: 'assign-to-departement/:ide', component: AssignDepartementComponent },
    { path: 'view-contracts/:id', component: ListContratComponent },
    { path: 'view-stages/:id', component: ListStageComponent },
    { path: 'view-teams/:id', component: ListequipesComponent }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
