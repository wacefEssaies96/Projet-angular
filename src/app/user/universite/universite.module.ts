import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UniversiteCardChildComponent } from './universite-card-child/universite-card-child.component';
import { UniversiteCardParentComponent } from './universite-card-parent/universite-card-parent.component';


@NgModule({
  declarations: [
    UniversiteComponent,
    UniversiteCardChildComponent,
    UniversiteCardParentComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    NgxPaginationModule
  ]
})
export class UniversiteModule { }
