import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() e: Etudiant;
  @Output() incrementEvent = new EventEmitter<Etudiant>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyParent(){
    this.incrementEvent.emit(this.e)
  }

}
