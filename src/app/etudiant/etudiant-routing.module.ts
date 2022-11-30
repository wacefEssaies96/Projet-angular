import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignDepartementComponent } from './assign-departement/assign-departement.component';
import { EtudiantComponent } from './etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';

const routes: Routes = [{ path: '', component: EtudiantComponent, children:[
    { path: '', component: ListEtudiantComponent },
    { path: 'list', component: ListEtudiantComponent },
    { path: 'add', component: FormEtudiantComponent },
    { path: 'update/:id', component: FormEtudiantComponent },
    { path: 'assign-to-departement/:ide', component: AssignDepartementComponent }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
