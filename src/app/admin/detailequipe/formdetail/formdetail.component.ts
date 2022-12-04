import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/core/model/detailequipe';
import { DetailequipeService } from 'src/app/core/services/detailequipe.service';

@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css']
})
export class FormdetailComponent implements OnInit {
  public action : string;
  public detailequipe : DetailEquipe;

  constructor(
    private detailService: DetailequipeService,
    private router: Router, 
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {      
  let id= this.currentRoute.snapshot.params['id'];
  if(id!=null){
    //update
    this.action="update";
    //this.product= this.productService.getProductByID(id);
    this.detailService.findById(id).subscribe(
      (object:DetailEquipe)=> {this.detailequipe=object}
    )
    
  }else
  { this.action="add";
    this.detailequipe = new DetailEquipe();}
  }

  saveDetailEquipe(){
    if(this.action=='add'){
         //this.detailequipe.opd="sport";
         console.log(this.detailequipe)

      this.detailService.addDetailEquipe(this.detailequipe).subscribe(
        ()=>{this.router.navigate(['/admin/detailequipe'])}
      )
    }
    else if(this.action=='update'){
      this.detailService.updateDetailEquipe(this.detailequipe).subscribe(
        ()=>{this.router.navigate(['/admin/detailequipe'])}
      )
    }
  }

}

