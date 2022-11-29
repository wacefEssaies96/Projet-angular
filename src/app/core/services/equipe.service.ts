import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipe } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  public url=environment.url+'equipe/'

  constructor(private http: HttpClient) { }
  getAllEquipe(){
    return this.http.get<Equipe[]>(this.url+"all")
  }
  addEquipe(e:Equipe){
    return this.http.post(this.url+"add/",e)
  }
  deleteEquipe(id:number){
    return this.http.delete(this.url+"delete/"+id)
  }
  updateEquipe(e:Equipe){
    return this.http.put(this.url+"update",e)
  }
  getEquipeByID(id:number){
    return this.http.get<Equipe>(this.url+"display/"+id)
  }
}
