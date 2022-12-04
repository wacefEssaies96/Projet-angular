import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { DetailequipeComponent } from './detailequipe.component';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { ListdetailComponent } from './listdetail/listdetail.component';

const routes: Routes = [
  {
    path: '', component: DetailequipeComponent, children: [
      { path: '', component: ListdetailComponent, canActivate: [AuthGuardService] },
      { path: 'list', component: ListdetailComponent, canActivate: [AuthGuardService] },
      { path: 'add', component: FormdetailComponent, canActivate: [AuthGuardService] },
      { path: 'edit/:id', component: FormdetailComponent, canActivate: [AuthGuardService] },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailequipeRoutingModule { }
