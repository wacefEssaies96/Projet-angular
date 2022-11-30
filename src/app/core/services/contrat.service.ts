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
  addContrat(c:Contrat){
    return this.http.post(this.url+"ajouter/",c)
  }
  deleteContrat(id:number){
    return this.http.delete(this.url+"supprimer/"+id)
  }
  updateContrat(c:Contrat){
    return this.http.put(this.url+"modifier/",c)
  }
  getContratByID(id:number){
    return this.http.get<Contrat>(this.url+id)
  }

}
