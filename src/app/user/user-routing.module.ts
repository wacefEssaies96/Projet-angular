import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    { path: '', loadChildren: () => import('../admin/home/home.module').then(m => m.HomeModule) },
    { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
    { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
    { path: 'contrats', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
    { path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) },
    { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
    { path: 'projets', loadChildren: () => import('./projets/projets.module').then(m => m.ProjetsModule) },
    { path: 'home', loadChildren: () => import('../admin/home/home.module').then(m => m.HomeModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
