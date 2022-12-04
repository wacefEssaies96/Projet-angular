import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { CoursComponent } from './cours.component';
import { FormCoursComponent } from './form-cours/form-cours.component';
import { ListCoursComponent } from './list-cours/list-cours.component';

const routes: Routes = [{ path: '', component: CoursComponent, children:[
  {path:'', component:ListCoursComponent, canActivate: [AuthGuardService]},
  {path:'list', redirectTo:'', canActivate: [AuthGuardService], pathMatch:"full"},
  {path:'form', component:FormCoursComponent, canActivate: [AuthGuardService]},
  { path:'update/:id', component:FormCoursComponent, canActivate: [AuthGuardService]}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
