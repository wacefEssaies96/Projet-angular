import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from 'src/app/core/model/stage';

@Component({
  selector: 'app-stage-card-child',
  templateUrl: './stage-card-child.component.html',
  styleUrls: ['./stage-card-child.component.css']
})
export class StageCardChildComponent implements OnInit {

  @Input() stage: Stage;
  @Output() incrementEvent = new EventEmitter<Stage>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.incrementEvent.emit(this.stage)
  }
}
