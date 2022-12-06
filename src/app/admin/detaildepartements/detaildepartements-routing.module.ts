import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaildepartementsComponent } from './detaildepartements.component';
import { FormdetailsdepartComponent } from './formdetailsdepart/formdetailsdepart.component';
import { ListdetailsdepartComponent } from './listdetailsdepart/listdetailsdepart.component';

const routes: Routes = [{ path: '', component: DetaildepartementsComponent, children: [
  { path: '', component: ListdetailsdepartComponent },
  { path: 'list', redirectTo: '', pathMatch: "full" },
  { path: 'new', component: FormdetailsdepartComponent },
  { path: 'update/:id', component: FormdetailsdepartComponent }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetaildepartementsRoutingModule { }
