import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
    { path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) },
    { path: 'contrats', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
    { path: 'cours', loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) },
    { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
    { path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) },
    { path: 'detailequipe', loadChildren: () => import('./detailequipe/detailequipe.module').then(m => m.DetailequipeModule) },
    { path: 'projets', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
    { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
    { path: 'clubs', loadChildren: () => import('./clubs/clubs.module').then(m => m.ClubsModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
