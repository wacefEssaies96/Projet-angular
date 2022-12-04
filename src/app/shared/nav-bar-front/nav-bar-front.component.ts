import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-front',
  templateUrl: './nav-bar-front.component.html',
  styleUrls: ['./nav-bar-front.component.css']
})
export class NavBarFrontComponent implements OnInit {

  public username: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
