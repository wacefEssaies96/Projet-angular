import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetailEquipe } from '../model/detailequipe';

@Injectable({
  providedIn: 'root'
})
export class DetailequipeService {

  public url= environment.url+'DetailEquipe/';
  constructor(private http: HttpClient) { }
  getAllDepartements(){
    return this.http.get<DetailEquipe[]>(this.url+'detailEquipes/');

  }
  addDetailEquipe(detail:DetailEquipe){
    return this.http.post(this.url+'AddDetailEquipe/', detail)
  }
  delete(id: number){
    return this.http.delete(this.url+'DeleteDetail/'+id);
  }
  updateDetailEquipe(detail:DetailEquipe){
    return this.http.put(this.url+'UpdateDetailEquipe/',detail);
  }
  findById(idDetailEquipe:number){
    return this.http.get<DetailEquipe>(this.url+'findById/'+idDetailEquipe);
  }
}
