import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Stage } from 'src/app/core/model/stage';
import { AdvancedServicesService } from 'src/app/core/services/advanced-services.service';
import { CrudsService } from 'src/app/core/services/cruds.service';

@Component({
  selector: 'app-list-stage',
  templateUrl: './list-stage.component.html',
  styleUrls: ['./list-stage.component.css']
})
export class ListStageComponent implements OnInit {

  searchValue = new FormControl('');
  searchCategory = new FormControl(''); 
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  
  public test: boolean = true;
  public title: String;
  public listStage: any;

  constructor(
    private AdvancedService : AdvancedServicesService,
    private crudsService : CrudsService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.title=" Liste Stages";
    let id = this.currentRoute.snapshot.params['id'];
    if(id){
      this.test = false;
      this.getList(id);
    }else{
      this.fetchStages();
    }
  }
  fetchStages(): void {
    this.crudsService.getAll(this.AdvancedService.StageControllerName).subscribe(
      (data:Stage[]) => {
        this.listStage = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getList(id: number){
    this.AdvancedService.retrieveData('/stage/stages-of-student/', id).subscribe({
      next: (data) => {
        this.listStage = data;
      }
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchStages();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchStages();
  }


}
