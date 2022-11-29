import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
const ROUTES: Routes = [
  { path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) },

   { path: '**', component: NotFoundComponent }
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
