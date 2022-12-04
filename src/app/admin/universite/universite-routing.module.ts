import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component'
import { UniversiteCardComponent } from './universite-card/universite-card.component';
import { AssignDepartementToUniversityComponent } from './assign-departement-to-university/assign-departement-to-university.component';
import { AssignCoursToUniversityComponent } from './assign-cours-to-university/assign-cours-to-university.component';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';

const routes: Routes = [{ path: '', component: UniversiteComponent, children:[
  {path:'', component:ListUniversiteComponent},
  {path:'list',redirectTo:'', pathMatch:"full", canActivate: [AuthGuardService]},
  {path:'update/:id', component:FormUniversiteComponent, canActivate: [AuthGuardService]},
  {path:'form', component:FormUniversiteComponent, canActivate: [AuthGuardService]},
  {path:'cardUniv/:id', component: UniversiteCardComponent, canActivate: [AuthGuardService]},
  {path:'cardUniv/update/:id', component:FormUniversiteComponent, canActivate: [AuthGuardService]},
  {path:'assign/:idUniv', component:AssignDepartementToUniversityComponent, canActivate: [AuthGuardService]},
  {path:'assignCours/:idUniv', component:AssignCoursToUniversityComponent, canActivate: [AuthGuardService]}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
