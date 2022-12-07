import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantComponent } from '../etudiant/list-etudiant/list-etudiant.component';
import { ListProjetComponent } from '../projet/list-projet/list-projet.component';
import { AssignProjetComponent } from './assign-projet/assign-projet.component';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListequipesComponent } from './liste-equipe/liste-equipe.component';

const routes: Routes = [{
  path: '', component: EquipesComponent, children: [
    { path: '', component: ListequipesComponent },
    { path: 'ListeEquipes', component: ListequipesComponent },
    { path: 'addEquipe', component: FormEquipeComponent },
    { path: 'UpdateEquipe/:id', component: FormEquipeComponent },
    { path: 'assign-projet-to-equipe/:ideq', component: AssignProjetComponent },
    { path: 'view-students/:ide', component: ListEtudiantComponent },
    { path: 'view-projects/:id', component: ListProjetComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
