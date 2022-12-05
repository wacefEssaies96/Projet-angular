import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  

  constructor(
    private toastr: ToastrService
    ) { }

    alert(typeAlert : String,messageAlert : String){
      if(typeAlert=="SUCCESS"){
        this.toastr.success(''+messageAlert,'',{
          timeOut: 3000,
        });
      }
      else if(typeAlert=="WARNING"){
        this.toastr.warning(''+messageAlert,'',{
          timeOut: 3000,
        });
      }
      else if(typeAlert=="ERROR"){
        this.toastr.error(''+messageAlert,'',{
          timeOut: 3000,
        });
      }
    }
}
