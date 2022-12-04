import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/core/model/departement';

@Component({
  selector: 'app-departementparent',
  templateUrl: './departementparent.component.html',
  styleUrls: ['./departementparent.component.css']
})
export class DepartementparentComponent implements OnInit {

  @Input() departement: Departement;
  @Output() notification: EventEmitter<Departement> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }
    notifyDelete(){
    this.notification.emit(this.departement)
    }
  }


