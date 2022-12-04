import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DetailEquipe } from 'src/app/core/model/detailequipe';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
@Input() detail: DetailEquipe;
@Output() notification: EventEmitter<DetailEquipe> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  notifyDelete(){
  this.notification.emit(this.detail)
  }
}
