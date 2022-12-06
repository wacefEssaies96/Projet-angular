import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaildepartementsRoutingModule } from './detaildepartements-routing.module';
import { DetaildepartementsComponent } from './detaildepartements.component';
import { ListdetailsdepartComponent } from './listdetailsdepart/listdetailsdepart.component';
import { FormdetailsdepartComponent } from './formdetailsdepart/formdetailsdepart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    DetaildepartementsComponent,
    ListdetailsdepartComponent,
    FormdetailsdepartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetaildepartementsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class DetaildepartementsModule { }
