import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { AssignProjetComponent } from './assign-projet/assign-projet.component';
import { FormProjetComponent } from './form-projet/form-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { ProjetComponent } from './projet.component';

const routes: Routes = [{
  path: '', component: ProjetComponent, children: [
    { path: '', component: ListProjetComponent, canActivate: [AuthGuardService] },
    { path: 'list', component: ListProjetComponent, canActivate: [AuthGuardService] },
    { path: 'add', component: FormProjetComponent, canActivate: [AuthGuardService] },
    { path: 'update/:id', component: FormProjetComponent, canActivate: [AuthGuardService] },
    { path: 'assign-projet-to-equipe/:ideq', component: AssignProjetComponent , canActivate: [AuthGuardService]}
  ]
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
