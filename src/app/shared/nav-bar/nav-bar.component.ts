import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
