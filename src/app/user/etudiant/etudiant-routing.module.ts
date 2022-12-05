import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [{
  path: '', component: EtudiantComponent, children: [
    { path: '', component: ListUserComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
