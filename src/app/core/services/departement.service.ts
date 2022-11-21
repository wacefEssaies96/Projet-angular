import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  public url= environment.url+'/departement/';
  public url1= environment.url+'/departement/delete/';
  constructor(private http: HttpClient) { }
  getAllDepartements(){
    return this.http.get<Departement>(this.url);

  }
  delete(id: number){
    return this.http.delete(this.url1+id)
  }
}
