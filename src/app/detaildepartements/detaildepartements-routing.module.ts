import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaildepartementsComponent } from './detaildepartements.component';

const routes: Routes = [{ path: '', component: DetaildepartementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaildepartementsRoutingModule { }
