import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public url=environment.url+'/equipe'

  constructor(private http: HttpClient) { }
  getAllEquipe(){
    return this.http.get<Equipe[]>(this.url+"/display")
  }
  addEquipe(e:Equipe){
    return this.http.post(this.url+"/ajouter",e)
  }
  deleteEquipe(id:number){
    return this.http.delete(this.url+"/supprimer/"+id)
  }
  updateEquipe(e:Equipe){
    return this.http.put(this.url+"/modifier",e)
  }
  getEquipeByID(id:number){
    return this.http.get<Equipe>(this.url+"/display/equipe/"+id)
  }
}
