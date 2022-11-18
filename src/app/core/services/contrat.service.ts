import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contrat } from '../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  
  public url=environment.url+'contrat/'
  
  constructor(
    private http: HttpClient
  ) { }

  getAllContrats(){
    return this.http.get<Contrat[]>(this.url+'Tous')
  }

}
