import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { UniversiteCardParentComponent } from './universite-card-parent/universite-card-parent.component';
import { UniversiteComponent } from './universite.component';

const routes: Routes = [{
  path: '', component: UniversiteComponent, children: [
    { path: '', component: UniversiteCardParentComponent, canActivate: [AuthGuardService] },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
