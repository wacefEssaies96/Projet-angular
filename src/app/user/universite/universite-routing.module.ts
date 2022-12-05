import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteCardParentComponent } from './universite-card-parent/universite-card-parent.component';
import { UniversiteComponent } from './universite.component';

const routes: Routes = [{
  path: '', component: UniversiteComponent, children: [
    { path: '', component: UniversiteCardParentComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
