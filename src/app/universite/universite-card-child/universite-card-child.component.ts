import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Universite } from 'src/app/core/model/universite';

@Component({
  selector: 'app-universite-card-child',
  templateUrl: './universite-card-child.component.html',
  styleUrls: ['./universite-card-child.component.css']
})
export class UniversiteCardChildComponent implements OnInit {

  @Input() universite: Universite;
  @Output() deleteEvent = new EventEmitter<Universite>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyListUniversite(){
    this.deleteEvent.emit(this.universite)
  }
}
