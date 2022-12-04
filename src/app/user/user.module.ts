import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavBarFrontComponent } from '../shared/nav-bar-front/nav-bar-front.component';
import { SideBarFrontComponent } from '../shared/side-bar-front/side-bar-front.component';


@NgModule({
  declarations: [
    UserComponent,
    NavBarFrontComponent,
    SideBarFrontComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
