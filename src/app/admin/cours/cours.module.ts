import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { FormCoursComponent } from './form-cours/form-cours.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursComponent,
    FormCoursComponent,
    ListCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoursModule { }
