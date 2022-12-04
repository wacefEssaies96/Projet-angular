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
      (data)=>{
        this.response = JSON.stringify(data);
        console.log(this.response);
        if(this.response != "Bad credentials !" && this.response != "Error !"){
          localStorage.setItem("username", this.username);
          localStorage.setItem("password", this.pwd);
          this.router.navigate(['/student/'])
        }
      }
    );
    
  }

}
