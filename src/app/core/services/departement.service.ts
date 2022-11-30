import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departement } from '../model/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  public url = environment.url + '/departement/';
  public url1 = environment.url + '/departement/delete/';
  public url2 = environment.url + '/departement/add/';
  public url3 = environment.url + "/departement/display/";
  public url4 = environment.url + "/departement/update/";

  constructor(private http: HttpClient) { }
  getAllDepartements() {
    return this.http.get<Departement>(this.url);

  }
  delete(id: number) {
    return this.http.delete(this.url1 + id)
  }
  save(d: Departement) {
    return this.http.post(this.url2, d);
  }
  getDepartementById(id: any) {
    return this.http.get<Departement>(this.url3 + id)
  }
  update(d: Departement, id: any) {
    return this.http.put<Departement>(this.url4 + id, d);
  }
}
