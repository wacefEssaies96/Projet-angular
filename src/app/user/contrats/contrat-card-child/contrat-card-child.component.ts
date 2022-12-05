import { Component, Input, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/model/contrat';

@Component({
  selector: 'app-contrat-card-child',
  templateUrl: './contrat-card-child.component.html',
  styleUrls: ['./contrat-card-child.component.css']
})
export class ContratCardChildComponent implements OnInit {

  @Input() contrat: Contrat;
  constructor() { }

  ngOnInit(): void {
  }

}
