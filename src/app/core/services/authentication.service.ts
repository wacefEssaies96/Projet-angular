import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: String){
    return this.http.get("http://localhost:8082/SpringMVC/login/authenticate/"+username+"/"+password,{headers:{skip:"true"}, responseType: 'text' as 'json'});
  }
  
  register(user: Etudiant){
    return this.http.post("http://localhost:8082/SpringMVC/user/registration",user,{headers:{skip:"true"}});
  }

}
