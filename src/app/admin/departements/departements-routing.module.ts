import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementsComponent } from './departements.component';
import { FormdepartementsComponent } from './formdepartements/formdepartements.component';
import { FormuniversityComponent } from './formuniversity/formuniversity.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';

const routes: Routes = [
  {path:'',component: DepartementsComponent,children:[
  {path:'', component: ListDepartementsComponent },
  {path:'list',component: ListDepartementsComponent },
  {path:'edit/:id', component: FormdepartementsComponent },
  {path:'remove', component: ListDepartementsComponent },
  {path:'new', component: FormdepartementsComponent }, 
  {path:'retreive', component:FormuniversityComponent },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementsRoutingModule { }
