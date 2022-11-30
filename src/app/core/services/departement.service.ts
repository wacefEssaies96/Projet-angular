import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  public url = environment.url + '/departement'

  constructor(private http : HttpClient) { }

  getAllDepartements(){
    return this.http.get<Departement[]>(this.url+'/display');
  }

}
