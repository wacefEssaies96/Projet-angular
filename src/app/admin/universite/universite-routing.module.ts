import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UniversiteComponent } from './universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component'
import { UniversiteCardComponent } from './universite-card/universite-card.component';
import { AssignDepartementToUniversityComponent } from './assign-departement-to-university/assign-departement-to-university.component';
import { AssignCoursToUniversityComponent } from './assign-cours-to-university/assign-cours-to-university.component';

const routes: Routes = [{
  path: '', component: UniversiteComponent, children: [
    { path: '', component: ListUniversiteComponent },
    { path: 'list', redirectTo: '', pathMatch: "full" },
    { path: 'update/:id', component: FormUniversiteComponent },
    { path: 'form', component: FormUniversiteComponent },
    { path: 'cardUniv/:id', component: UniversiteCardComponent },
    { path: 'cardUniv/update/:id', component: FormUniversiteComponent },
    { path: 'assign/:idUniv', component: AssignDepartementToUniversityComponent },
    { path: 'assignCours/:idUniv', component: AssignCoursToUniversityComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
