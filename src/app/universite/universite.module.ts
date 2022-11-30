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


@NgModule({
  declarations: [
    UniversiteComponent,
    ListUniversiteComponent,
    FormUniversiteComponent,
    UniversiteCardComponent,
    UniversiteCardParentComponent,
    UniversiteCardChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class UniversiteModule { }
