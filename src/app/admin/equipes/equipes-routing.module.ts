import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { EquipesComponent } from './equipes.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import { ListequipesComponent } from './liste-equipe/liste-equipe.component';

const routes: Routes = [  { path: '', component: EquipesComponent,children:[ 
  { path: '', component: ListequipesComponent, canActivate: [AuthGuardService] },
  { path: 'ListeEquipes', component: ListequipesComponent, canActivate: [AuthGuardService] },
  {path:'addEquipe', component: FormEquipeComponent, canActivate: [AuthGuardService]},
  {path:'UpdateEquipe/:id', component:FormEquipeComponent, canActivate: [AuthGuardService]}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
