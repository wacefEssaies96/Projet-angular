import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { DepartementsComponent } from './departements.component';
import { FormdepartementsComponent } from './formdepartements/formdepartements.component';
import { FormuniversityComponent } from './formuniversity/formuniversity.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';

const routes: Routes = [
  {path:'',component: DepartementsComponent,children:[
  {path:'', component: ListDepartementsComponent, canActivate: [AuthGuardService]},
  {path:'list',component: ListDepartementsComponent, canActivate: [AuthGuardService]},
  {path:'edit/:id', component: FormdepartementsComponent, canActivate: [AuthGuardService]},
  {path:'remove', component: ListDepartementsComponent, canActivate: [AuthGuardService]},
  {path:'new', component: FormdepartementsComponent, canActivate: [AuthGuardService]}, 
  {path:'retreive', component:FormuniversityComponent, canActivate: [AuthGuardService]},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementsRoutingModule { }
