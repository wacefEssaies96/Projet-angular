import { Component, Input, OnInit } from '@angular/core';
import { Projet } from 'src/app/core/model/projet';

@Component({
  selector: 'app-projet-card-child',
  templateUrl: './projet-card-child.component.html',
  styleUrls: ['./projet-card-child.component.css']
})
export class ProjetCardChildComponent implements OnInit {

  @Input() projet: Projet;
  constructor() { }

  ngOnInit(): void {
  }

}
