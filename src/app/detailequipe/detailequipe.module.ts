import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailequipeRoutingModule } from './detailequipe-routing.module';
import { DetailequipeComponent } from './detailequipe.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    FormdetailComponent,
    ListdetailComponent,
    DetailequipeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DetailequipeRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class DetailequipeModule { }
