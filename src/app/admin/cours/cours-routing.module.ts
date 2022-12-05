import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours.component';
import { FormCoursComponent } from './form-cours/form-cours.component';
import { ListCoursComponent } from './list-cours/list-cours.component';

const routes: Routes = [{
  path: '', component: CoursComponent, children: [
    { path: '', component: ListCoursComponent },
    { path: 'list', redirectTo: '', pathMatch: "full" },
    { path: 'form', component: FormCoursComponent },
    { path: 'update/:id', component: FormCoursComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
