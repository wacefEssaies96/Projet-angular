import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListequipesComponent } from './liste-equipe/liste-equipe.component';

const routes: Routes = [{
  path: '', component: EquipesComponent, children: [
    { path: '', component: ListequipesComponent },
    { path: 'ListeEquipes', component: ListequipesComponent },
    { path: 'addEquipe', component: FormEquipeComponent },
    { path: 'UpdateEquipe/:id', component: FormEquipeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
