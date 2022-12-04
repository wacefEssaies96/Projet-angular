import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/core/model/etudiant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() e: Etudiant;
  constructor() { }

  ngOnInit(): void {
  }

}
