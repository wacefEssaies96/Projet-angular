import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsComponent } from './clubs.component';
import { FormclubComponent } from './formclub/formclub.component';
import { ListclubComponent } from './listclub/listclub.component';

const routes: Routes = [{
  path: '', component: ClubsComponent, children: [
    { path: '', component: ListclubComponent },
    { path: 'list', component: ListclubComponent },
    { path: 'add', component: FormclubComponent },
    { path: 'update/:id', component: FormclubComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
