import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementsRoutingModule } from './departements-routing.module';
import { DepartementsComponent } from './departements.component';
import { ListDepartementsComponent } from './list-departements/list-departements.component';
import { FormdepartementsComponent } from './formdepartements/formdepartements.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter'

@NgModule({
  declarations: [
    DepartementsComponent,
    ListDepartementsComponent,
    FormdepartementsComponent,
  ],
  imports: [
    CommonModule,
     DepartementsRoutingModule,
     FormsModule,
      Ng2SearchPipeModule
    ],
})
export class DepartementsModule {}
