import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UniversiteCardComponent } from './universite-card/universite-card.component';
import { UniversiteCardParentComponent } from './universite-card-parent/universite-card-parent.component';
import { UniversiteCardChildComponent } from './universite-card-child/universite-card-child.component';
import { AssignDepartementToUniversityComponent } from './assign-departement-to-university/assign-departement-to-university.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AssignCoursToUniversityComponent } from './assign-cours-to-university/assign-cours-to-university.component';

@NgModule({
  declarations: [
    UniversiteComponent,
    ListUniversiteComponent,
    FormUniversiteComponent,
    UniversiteCardComponent,
    UniversiteCardParentComponent,
    UniversiteCardChildComponent,
    AssignDepartementToUniversityComponent,
    AssignCoursToUniversityComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule
 ]
})
export class UniversiteModule { }
