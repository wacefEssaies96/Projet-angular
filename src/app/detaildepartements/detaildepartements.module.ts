import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaildepartementsRoutingModule } from './detaildepartements-routing.module';
import { DetaildepartementsComponent } from './detaildepartements.component';
import { ListdetailsdepartComponent } from './listdetailsdepart/listdetailsdepart.component';
import { FormdetailsdepartComponent } from './formdetailsdepart/formdetailsdepart.component';


@NgModule({
  declarations: [
    DetaildepartementsComponent,
    ListdetailsdepartComponent,
    FormdetailsdepartComponent
  ],
  imports: [
    CommonModule,
    DetaildepartementsRoutingModule
  ]
})
export class DetaildepartementsModule { }
