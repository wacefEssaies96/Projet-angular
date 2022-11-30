import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailequipeRoutingModule } from './detailequipe-routing.module';
import { DetailequipeComponent } from './detailequipe.component';
import { ListdetailComponent } from './listdetail/listdetail.component';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    FormdetailComponent,
    ListdetailComponent,
    DetailequipeComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DetailequipeRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class DetailequipeModule { }
