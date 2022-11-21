import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListDepartementsComponent } from './departements/list-departements/list-departements.component';
import { FormdepartementsComponent } from './departements/formdepartements/formdepartements.component';
const ROUTES: Routes = [
  { path: 'departements', loadChildren: () => import('./departements/departements.module').then(m => m.DepartementsModule) }
  ,{ path: 'departements/edit/:id', component:FormdepartementsComponent },
 { path: '', component: ListDepartementsComponent }
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
