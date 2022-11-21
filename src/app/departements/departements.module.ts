import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { FormdepartementsComponent } from './formdepartements/formdepartements.component';


@NgModule({
  declarations: [DepartementsComponent, ListDepartementsComponent, FormdepartementsComponent],
  imports: [
    CommonModule,
    DepartementsRoutingModule
  ]
})
export class DepartementsModule { }
