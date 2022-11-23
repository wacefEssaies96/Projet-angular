import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListdetailComponent } from './detailequipe/listdetail/listdetail.component';
import { DetailequipeComponent } from './detailequipe/detailequipe.component';
const ROUTES: Routes = [
  { path: 'detailequipe', loadChildren: () => import('./detailequipe/detailequipe.module').then(m => m.DetailequipeModule) },
  {path:'',component:ListdetailComponent},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
