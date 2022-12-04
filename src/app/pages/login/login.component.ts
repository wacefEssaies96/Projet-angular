import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public pwd: string;
  public response: string;

  constructor( 
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.authService.login(this.username, this.pwd).subscribe(
      (data: string)=>{
        this.response = data;
        if(this.response != 'null'){
          localStorage.setItem("username", this.username);
          localStorage.setItem("password", this.pwd);
          if(this.response == "ADMIN"){
            this.router.navigate(['/admin'])
          }
          if(this.response == "ETUDIANT"){
            this.router.navigate(['/user'])
          }
        }
      }
    );
    
  }

}
