import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/core/model/departement';
import { DepartementService } from 'src/app/core/services/departement.service';

@Component({
  selector: 'app-formdepartements',
  templateUrl: './formdepartements.component.html',
  styleUrls: ['./formdepartements.component.css']
})
export class FormdepartementsComponent implements OnInit {
public label:String;
public action:String="editer";
public departement:Departement;
  id: any;
  msg:String
  constructor(  private router:Router, private currentRoute: ActivatedRoute,private ds:DepartementService) { }

  ngOnInit(): void {
   this.id= this.currentRoute.snapshot.params['id'];
    console.log("le id est "+this.id)
    if(this.id!=null){
      //update
      this.action="editer ";

      //this.product= this.productService.getProductByID(id);
      this.ds.getDepartementById(this.id).subscribe(
        (object: Departement)=> this.departement=object
      )
      console.log(this.departement)
      console.log(this.id)
    }else
    { this.action="add";
      this.departement=new Departement();}








  }
saveDepartement(){
    if(this.action=='add')
    {
    //this.productService.list.push(this.product);
    this.ds.save(this.departement).subscribe(
      ()=>{this.msg="added";}
    )
   }
    else {
      this.ds.update(this.departement,this.id).subscribe(
       ()=>{this.msg="updated";}
      )
    }

    console.log(this.msg)
  }




}
