import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';


@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    UniversityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
