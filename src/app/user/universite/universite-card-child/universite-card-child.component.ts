import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';

@Component({
  selector: 'app-universite-card-child',
  templateUrl: './universite-card-child.component.html',
  styleUrls: ['./universite-card-child.component.css']
})
export class UniversiteCardChildComponent implements OnInit {

  @Input() universite: Universite;
  @Output() incrementEvent = new EventEmitter<Universite>();
  public type : String;
  public test :boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.type==='PUBLIC'){
      this.test=true;
    } else {
      this.test=false;
    }
  }

  notifyParent(){
    this.incrementEvent.emit(this.universite)
  }
}
