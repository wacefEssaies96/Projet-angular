import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailequipeComponent } from './detailequipe.component';
import {FormdetailComponent } from './formdetail/formdetail.component';
import { ListdetailComponent} from './listdetail/listdetail.component';

const routes: Routes = [
  { path: '', component: DetailequipeComponent , children:[
    {path:'',component:ListdetailComponent},
  {path:'list',component:ListdetailComponent},
  
  {path:'edit/:id', component: FormdetailComponent},
  {path:'remove', component: ListdetailComponent},

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipeRoutingModule { }
