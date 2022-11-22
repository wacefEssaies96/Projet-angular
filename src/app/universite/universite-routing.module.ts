import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component'

const routes: Routes = [{ path: '', component: UniversiteComponent, children:[
  {path:'', component:ListUniversiteComponent},
  {path:'list',redirectTo:'',pathMatch:"full"},
  {path:'update/:id', component:FormUniversiteComponent},
  {path:'form', component:FormUniversiteComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
