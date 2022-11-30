import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const ROUTES: Routes = [
  { path: 'equipes', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
  { path: 'student', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
