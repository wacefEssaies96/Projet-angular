import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
    { path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) },
    { path: 'contrats', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
    { path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) },
    { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
