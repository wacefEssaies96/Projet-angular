import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projet } from '../model/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  public url=environment.url+'/projet'

  constructor(private http: HttpClient) { }
  getAllProjet(){
    return this.http.get<Projet[]>(this.url+"/display")
  }
  addProjet(p:Projet){
    return this.http.post(this.url+"/ajouter",p)
  }
  deleteProjet(id:number){
    return this.http.delete(this.url+"/supprimer/"+id)
  }
  updateProjet(p:Projet){
    return this.http.put(this.url+"/modifier",p)
  }
  getProjetByID(id:number){
    return this.http.get<Projet>(this.url+"/display/projet/"+id)
  }
}