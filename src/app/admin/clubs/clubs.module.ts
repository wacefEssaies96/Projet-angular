import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { ListclubComponent } from './listclub/listclub.component';
import { FormclubComponent } from './formclub/formclub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ClubsComponent,
    ListclubComponent,
    FormclubComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
    

  ]
})
export class ClubsModule { }
