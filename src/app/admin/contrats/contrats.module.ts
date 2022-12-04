import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratsRoutingModule } from './contrats-routing.module';
import { ContratsComponent } from './contrats.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { FormContratComponent } from './form-contrat/form-contrat.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { searchContrat } from 'src/app/core/search/search-contrat';


@NgModule({
  declarations: [
    ContratsComponent,
    ListContratComponent,
    FormContratComponent,
    DetailsContratComponent,
    searchContrat
  ],
  imports: [
    CommonModule,
    ContratsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ContratsModule { }
