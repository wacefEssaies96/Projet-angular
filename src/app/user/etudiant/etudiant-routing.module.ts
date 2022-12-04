import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { EtudiantComponent } from './etudiant.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [{
  path: '', component: EtudiantComponent, children: [
    { path: '', component: ListUserComponent , canActivate: [AuthGuardService] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
