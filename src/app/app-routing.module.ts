import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListdetailComponent } from './detailequipe/listdetail/listdetail.component';
const ROUTES: Routes = [
  { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
  { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) },
  { path: 'detailequipe', loadChildren: () => import('./detailequipe/detailequipe.module').then(m => m.DetailequipeModule) },
  { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
  { path: 'contrats', loadChildren: () => import('./contrats/contrats.module').then(m => m.ContratsModule) },
  { path: '', component: ListdetailComponent },
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
