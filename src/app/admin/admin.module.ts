import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
