import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Projet } from 'src/app/core/model/projet';

@Component({
  selector: 'app-projet-card-child',
  templateUrl: './projet-card-child.component.html',
  styleUrls: ['./projet-card-child.component.css']
})
export class ProjetCardChildComponent implements OnInit {

  @Input() pr: Projet;
  @Output() incrementEvent = new EventEmitter<Projet>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.incrementEvent.emit(this.pr)
  }
}
