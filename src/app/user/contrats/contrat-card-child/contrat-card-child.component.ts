import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';

@Component({
  selector: 'app-contrat-card-child',
  templateUrl: './contrat-card-child.component.html',
  styleUrls: ['./contrat-card-child.component.css']
})
export class ContratCardChildComponent implements OnInit {

  @Input() contrat: Contrat;
  @Output() incrementEvent = new EventEmitter<Contrat>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.incrementEvent.emit(this.contrat)
  }
}
