import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiant.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    EtudiantComponent,
    ListUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
