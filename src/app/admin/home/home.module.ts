import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { UniversityComponent } from './university/university.component';
import { ContractsComponent } from './contracts/contracts.component';
import { StageComponent } from './stage/stage.component';
import { TeamsComponent } from './teams/teams.component';


@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    UniversityComponent,
    ContractsComponent,
    StageComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
