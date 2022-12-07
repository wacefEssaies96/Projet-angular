import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignProjetComponent } from '../equipes/assign-projet/assign-projet.component';
import { ListequipesComponent } from '../equipes/liste-equipe/liste-equipe.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { ProjetComponent } from './projet.component';

const routes: Routes = [{
  path: '', component: ProjetComponent, children: [
    { path: '', component: ListProjetComponent },
    { path: 'list', component: ListProjetComponent },
    { path: 'add', component: FormProjetComponent },
    { path: 'update/:id', component: FormProjetComponent },
    { path: 'assign-projet-to-equipe/:ideq', component: AssignProjetComponent },
    { path: 'view-equipes/:idp', component: ListequipesComponent}
  ]
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
