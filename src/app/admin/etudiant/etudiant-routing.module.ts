import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/core/services/auth-guard.service';
import { AssignDepartementComponent } from './assign-departement/assign-departement.component';
import { EtudiantComponent } from './etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantComponent, children:[
    { path: '', component: ListEtudiantComponent, canActivate: [AuthGuardService] },
    { path: 'list', component: ListEtudiantComponent, canActivate: [AuthGuardService] },
    { path: 'add', component: FormEtudiantComponent, canActivate: [AuthGuardService] },
    { path: 'update/:id', component: FormEtudiantComponent, canActivate: [AuthGuardService] },
    { path: 'register', component: FormEtudiantComponent},
    { path: 'assign-to-departement/:ide', component: AssignDepartementComponent, canActivate: [AuthGuardService] }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
