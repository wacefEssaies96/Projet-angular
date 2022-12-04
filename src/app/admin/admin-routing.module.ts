import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
